
document.querySelector('#start1').onclick = function(){
   var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51
                    
    var acliref = firebase.database().ref(`crimecredential/${sessionStorage.getItem("vbkey")}${sessionStorage.getItem("vmfkey")}`);
    var data ={
        testpass:"1",
        h:d.getHours(),
        m:d.getMinutes(),
        s:d.getSeconds()
    }
    acliref.update(data).then(function() {
        window.open(sessionStorage.getItem("ttst"));
    
    })
        console.log("start");
    
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
 console.log(user.email)
       sessionStorage.setItem("vbkey",user.email)
     
       var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
           
          var newVoke = data.val();

             sessionStorage.setItem("vbkey",newVoke.phone)
                        sessionStorage.setItem("vmfkey",newVoke.regd)
            sessionStorage.setItem("ttst",newVoke.prmesg)
        
           document.getElementById("loader").style.display="none";
           document.getElementById("start1").style.display="block";
          
           
       })
          
           

            
}
    
    else{
      window.open('index.html','_self');
    }
    
    


        
    });

    