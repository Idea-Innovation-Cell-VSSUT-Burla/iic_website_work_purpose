db=firebase.firestore();
document.querySelector('#mchn').onclick = function(){
                firebase.auth().signOut();          
        
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
 console.log(user.email)
     db.collection("2022").where("email","==",user.email).get().then((snapshort)=>{
          snapshort.docs.forEach(doc => {
               newVoke=doc.data();
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
                    if(newVoke.newdomain){
                     document.getElementById("dom").textContent=`${newVoke.newdomain}`;}
                     else{
                          document.getElementById("dom").textContent=`${newVoke.domain}`;
                     }
                      document.getElementById("regd").textContent=`${newVoke.regd}`;
                      if(newVoke.sr1==1){
                          
                          document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the next round. May the force be with you!`;
                           document.getElementById("selected").style.display=`block`;
                           if(newVoke.sr2==1){
                                document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the 3rd round. May the force be with you!`;
                           document.getElementById("selected").style.display=`block`;
                           if(newVoke.sr3==1){
                               document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the final round. Details will be given to you soon. May the force be with you!`;
                           document.getElementById("selected").style.display=`block`;
                           if(newVoke.sr3email==1){
                               document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. Further details will be notified to you on your registered email id. Stay tuned !!`;
                           document.getElementById("selected").style.display=`none`;
                           }
                           if(newVoke.sr3email==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                           }
                           }
                            if(newVoke.sr3==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                           }
                           
                           }
                           if(newVoke.sr2==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                           }
                           
                          
                      }
                      else{
                          document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                           document.getElementById("newu").style.display=`none`;
                      }
                    //   if(newVoke.sr1email==1){
                    //        document.getElementById("cnf12").textContent=`Your response is submitted successfully. `;
                    //          document.getElementById("cnf123").style.display=`none`;
                             
                    //   }
                    //   else{
                    //        document.getElementById("cnf12").textContent=`Your response is not submitted. `;
                         
                    //   }
                      
                      document.getElementById("loader").style.display=`none`;
                    document.getElementById("optimi").style.display=`block`;
                    document.getElementById("optpic").style.display=`block`;
                     document.getElementById("testpep").style.display=`block`;
          })
     })
}
    else{
      window.open('index.html','_self');
    }
    
    


        
    });