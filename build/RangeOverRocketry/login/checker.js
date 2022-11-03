var config = {
    apiKey: "AIzaSyCDAwkXKwjbQFqXWsh-W3rdbroTNLc6mjA",
  authDomain: "range-rocket.firebaseapp.com",
  databaseURL: "https://range-rocket-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "range-rocket",
  storageBucket: "range-rocket.appspot.com",
  messagingSenderId: "819318274780",
  appId: "1:819318274780:web:3806d60dac3da440509219",
  measurementId: "G-68Z4H04FGF"
 
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