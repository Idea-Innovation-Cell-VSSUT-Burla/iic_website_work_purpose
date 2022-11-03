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
              if(newVoke.sr1==1){
                  
                  document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the next round. May the force be with you!`;
                   document.getElementById("selected").style.display=`block`;
                   if(newVoke.sr2==1){
                        document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the 3rd round. May the force be with you!`;
                   document.getElementById("selected").style.display=`block`;
                   }
                   if(newVoke.sr2==0){
                        document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                   }
                   
                  
              }
              else{
                  document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                   document.getElementById("newu").style.display=`none`;
              }
              if(newVoke.sr1email==1){
                   document.getElementById("cnf12").textContent=`Your response is submitted successfully. `;
                     document.getElementById("cnf123").style.display=`none`;
                     
              }
              else{
                   document.getElementById("cnf12").textContent=`Your response is not submitted. `;
                 
              }
              
              document.getElementById("loader").style.display=`none`;
            document.getElementById("optimi").style.display=`block`;
            document.getElementById("optpic").style.display=`block`;
             document.getElementById("testpep").style.display=`block`;
             
            

           
       })
          
           
           
            
}
    
    else{
      window.open('index.html','_self');
    }
    
    


        
    });