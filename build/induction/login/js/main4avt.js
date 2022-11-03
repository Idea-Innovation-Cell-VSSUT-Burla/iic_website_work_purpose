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
           
           document.getElementById("pname").textContent=`${newVoke.name}`;   
            document.getElementById("fname").textContent=`${newVoke.name}`;
           document.getElementById("email").textContent=`${newVoke.email}`;
                      
           document.getElementById("phone").textContent=`${newVoke.phone}`;
            document.getElementById("branch").textContent=`${newVoke.branch}`;
             document.getElementById("dom").textContent=`${newVoke.domain}`;
              document.getElementById("regd").textContent=`${newVoke.regd}`;
              document.getElementById("loader").style.display=`none`;
            document.getElementById("optimi").style.display=`block`;
            document.getElementById("optpic").style.display=`block`;
             document.getElementById("testpep").style.display=`block`;
            if(newVoke.testpass){
                document.getElementById("test12").textContent=`Your test has been submitted successfully.`;
            }

           
       })
          
           
           
            
}
    
    else{
      window.open('index.html','_self');
    }
    
    


        
    });