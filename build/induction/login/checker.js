var config = {
    apiKey: "AIzaSyCNQ2dVE0kjJR6DSzKntRpAihvYF5c3jbk",
    authDomain: "iic-vssut-website.firebaseapp.com",
    databaseURL: "https://iic-vssut-website-default-rtdb.firebaseio.com",
    projectId: "iic-vssut-website",
    storageBucket: "iic-vssut-website.appspot.com",
    messagingSenderId: "778676985738",
    appId: "1:778676985738:web:f4a1b8006fc91c4436f273",
    measurementId: "G-83SZ7TTSG7"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;

        
        window.open('verify-email.html','_self');
           
    
}).catch(function(error) {
  // An error happened.
});
           }
           var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               window.open('dash.html','_self');
}
           else{
               window.open('database.html','_self');
           }

   } );
   }
    else{
    window.open('index1.html','_self');
    }
});

