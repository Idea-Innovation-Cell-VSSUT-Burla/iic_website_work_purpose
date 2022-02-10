firebase.auth().onAuthStateChanged(function(user) {
 
 
    if(user){
  console.log(user.email)
      
        var cliref = firebase.database().ref('crimecredential');
        cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
            
           var newVoke = data.val();
           
            sessionStorage.setItem('certiname',newVoke.name)
            exec();
            function exec(){
             document.getElementById("loader").style.display="none"
             document.getElementById("check").style.display=`block`;
            }
            
           
 
            
        })
           
            
            
             
 }
     
     else{
       window.open('../index.html','_self');
     }
     
     
 
 
         
     });