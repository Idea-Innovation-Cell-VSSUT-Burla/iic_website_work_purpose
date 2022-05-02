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
                    //   console.log(typeof(newVoke.sr1));
                    //   console.log(typeof(newVoke.domain));
                      let domn=newVoke.domain;
                      console.log(domn)
                    //   console.log(domn[0])
                    //   console.log(newVoke.domain);
                    //   doma=domn.length;
                      if(newVoke.sr1==1){
                           console.log(newVoke.sr3);
                          
                          document.getElementById("msgind").textContent=`“Kudos!" We are pleased to inform you that you have completed the first round of induction and have been selected for the PI Round 1. Once more, congratulations and best wishes for your next adventure! May the force be with you!!`;

                           //all
                           if(domn===" CS-Electronics,  Mechanical,  Chemical,  Managment, "){
                              // document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                           }
                           //3
                           else if(domn===" CS-Electronics,  Mechanical,  Chemical, "){
                              // document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" CS-Electronics,  Chemical,  Managment, "){
                              // document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" CS-Electronics,  Mechanical,  Managment, "){
                              // document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Mechanical,  Chemical,  Managment, "){
                              document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         //2
                         else if(domn===" CS-Electronics,  Mechanical, "){
                              // document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" CS-Electronics,  Chemical, "){
                              // document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" CS-Electronics,  Managment, "){
                              // document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Mechanical,  Chemical, "){
                              document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Mechanical,  Managment, "){
                              document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Chemical,  Managment, "){
                              document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                              console.log("CM");
                         }
                         //1
                         else if(domn===" CS-Electronics, "){
                              // document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Mechanical, "){
                              document.getElementById("chat1").style.display=`none`;
                              // document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Chemical, "){
                              document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              // document.getElementById("chat3").style.display=`none`;
                              document.getElementById("chat4").style.display=`none`;
                         }
                         else if(domn===" Managment, "){
                              document.getElementById("chat1").style.display=`none`;
                              document.getElementById("chat2").style.display=`none`;
                              document.getElementById("chat3").style.display=`none`;
                              // document.getElementById("chat4").style.display=`none`;
                         }
                         // else{
                         //      document.getElementById("chat1").style.display=`none`;
                         //      document.getElementById("chat2").style.display=`none`;
                         //      document.getElementById("chat3").style.display=`none`;
                         //      document.getElementById("chat4").style.display=`none`;
                         // }
                         

                         if(newVoke.sr2==1){
                                document.getElementById("msgind").textContent=`You are selected for PI round 2, We congratulate you and wish you All the Best for Next Round. May the force be with you!`;
                           

                           if(newVoke.sr3==1){
                               document.getElementById("msgind").textContent=`You are selected, we congratulate you and wish you luck for the final round. Go join the whatsapp group from the link provided in the activity section, if you are from CS-Electronics domain else for other domains if you haven't joined any group kindly contact your respectve domain members. May the force be with you!`;

                           document.getElementById("selected").style.display=`block`;
                           //3
                         if(domn===" Mechanical,  Chemical,  Managment, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                         //2
                         else if(domn===" Mechanical,  Chemical, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                         else if(domn===" Mechanical,  Managment, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                         else if(domn===" Chemical,  Managment, "){
                              document.getElementById("chat13").style.display=`none`;
                              console.log("CM");
                         }
                         //1
                         else if(domn===" Mechanical, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                         else if(domn===" Chemical, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                         else if(domn===" Managment, "){
                              document.getElementById("chat13").style.display=`none`;
                         }
                           if(newVoke.sr3email==11){
                               document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell in - "CS-ELECRONICS Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                               
                               So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                               document.getElementById("selected").style.display=`block`;
                           }
                           if(newVoke.sr3email==21){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "MACHENICAL Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==31){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "CHEMICAL Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==41){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "MANAGEMENT Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==51){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "CS-ELECTRONICS and MECHANICAL Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==61){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "CHEMICAL and MANAGEMENT Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==71){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "CS-ELECTRONICS and MANAGEMENT Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                          if(newVoke.sr3email==81){
                              document.getElementById("msgind").textContent=`Congratulations! You have been successfully inducted to Idea Innovation Cell In - "MECHANICAL and MANAGEMENT Domain" . We heartily welcome you to our tech family and wish that you always keep up the spirit of innovation and brainstorming that brought you to this rostrum. 
                              
                              So everyone join the whatsapp group from the activity section named: IIC Sopho & Fresher's '25`;
                              document.getElementById("selected").style.display=`block`;
                          }
                           if(newVoke.sr3email==2){
                              document.getElementById("msgind").textContent=`You have been kept on standby in - "CS-ELECTRONICS Domain" . So a training session has been scheduled for everyone in IIC for some duration! So stay tuned with the training session. You will have your final PI after the training session. Further Informations about the trainings you will be informed in the respective groups!`;
                              document.getElementById("chat14").style.display=`none`;
                           }
                           if(newVoke.sr3email==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                                 document.getElementById("chat14").style.display=`none`;
                           }
                         }
                            if(newVoke.sr3==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                                 document.getElementById("chat14").style.display=`none`;
                           }
                         
                           
                           }
                           if(newVoke.sr2==0){
                                document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                                 document.getElementById("selected").style.display=`none`;
                                 document.getElementById("pi2").style.display=`none`;
                                 document.getElementById("chat14").style.display=`none`;
                                 document.getElementById("pi21").style.display=`none`;

                         }
                           
                          
                    }
                      else{
                           console.log("hmm")
                          document.getElementById("msgind").textContent=`You couldn't make it to the next round, don't feel bad. Life is full of opportunities. Some other occasion will be waiting for you.`;
                           document.getElementById("newu").style.display=`none`;
                           document.getElementById("Inducted1").style.display=`none`;
                           document.getElementById("Inducted2").style.display=`none`;
                           document.getElementById("pi2").style.display=`none`;
                           document.getElementById("pi21").style.display=`none`;
                           document.getElementById("chat14").style.display=`none`;
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