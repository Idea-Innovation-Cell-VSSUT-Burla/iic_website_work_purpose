var config = {
<<<<<<< HEAD
    apiKey: "AIzaSyAe5Cf1wETRYBs3Yn8C5DZIqxNTq_BAIVk",
    authDomain: "induction-2022.firebaseapp.com",
    databaseURL: "https://induction-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "induction-2022",
    storageBucket: "induction-2022.appspot.com",
    messagingSenderId: "176967591803",
    appId: "1:176967591803:web:a84073f145b8526709bfde",
    measurementId: "G-521Y3JZNJD"
 
=======
    apiKey: "AIzaSyCNQ2dVE0kjJR6DSzKntRpAihvYF5c3jbk",
    authDomain: "iic-vssut-website.firebaseapp.com",
    databaseURL: "https://iic-vssut-website-default-rtdb.firebaseio.com",
    projectId: "iic-vssut-website",
    storageBucket: "iic-vssut-website.appspot.com",
    messagingSenderId: "778676985738",
    appId: "1:778676985738:web:f4a1b8006fc91c4436f273",
    measurementId: "G-83SZ7TTSG7"
>>>>>>> ac2b977 (meta-fiaso)
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
<<<<<<< HEAD
 
=======
>>>>>>> ac2b977 (meta-fiaso)
 db=firebase.firestore();
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;
<<<<<<< HEAD

=======
>>>>>>> ac2b977 (meta-fiaso)
        
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
            
<<<<<<< HEAD
        
 
=======
      
>>>>>>> ac2b977 (meta-fiaso)
    } );
   }
    else{
    window.open('index1.html','_self');
    }
});