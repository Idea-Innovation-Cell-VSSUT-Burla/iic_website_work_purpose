var config = {
    apiKey: "AIzaSyAe5Cf1wETRYBs3Yn8C5DZIqxNTq_BAIVk",
    authDomain: "induction-2022.firebaseapp.com",
    databaseURL: "https://induction-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "induction-2022",
    storageBucket: "induction-2022.appspot.com",
    messagingSenderId: "176967591803",
    appId: "1:176967591803:web:a84073f145b8526709bfde",
    measurementId: "G-521Y3JZNJD"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 db=firebase.firestore();
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
           db.collection("2022").where("email","==",user.email).get().then((snapshort)=>{
          snapshort.docs.forEach(doc =>{
            if(doc.exists){
                window.open('dash.html','_self');
 }
            else{
                window.open('database.html','_self');
            }
          });
            
        
 
    } );
   }
    else{
    window.open('index1.html','_self');
    }
});