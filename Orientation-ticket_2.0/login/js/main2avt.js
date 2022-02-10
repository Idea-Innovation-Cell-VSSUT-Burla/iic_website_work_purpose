document.querySelector('#mchn').onclick = function(){
                firebase.auth().signOut();          
        
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
 console.log(user.email)
     
       var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
           
          var newVoke = data.val();
           if(newVoke.gender=="male"){
            document.getElementById("gender").src="images/avatar6.png";
           }
           if(newVoke.gender=="female"){
            document.getElementById("gender").src="images/avatar3.jpeg";
           }
           sessionStorage.setItem('certiname',newVoke.name)
           document.getElementById("pname").textContent=`${newVoke.name}`;   
            document.getElementById("fname").textContent=`${newVoke.name}`;
           document.getElementById("email").textContent=`${newVoke.email}`;
                      
           document.getElementById("phone").textContent=`${newVoke.phone}`;
            document.getElementById("city").textContent=`${newVoke.city}`;
            document.getElementById("loader").style.display="none"
            document.getElementById("check").style.display=`block`;
            document.getElementById("optimi").style.display=`block`;
            document.getElementById("optpic").style.display=`block`;
            var today = new Date();
            var time = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
             
            
            sessionStorage.setItem('certitime',`${time.getHours()} ${time.getMinutes()}`)
                       sessionStorage.setItem('certidate',today)

           
       })
          
           
           
            
}
    
    else{
      window.open('index.html','_self');
    }
    
    


        
    });

    