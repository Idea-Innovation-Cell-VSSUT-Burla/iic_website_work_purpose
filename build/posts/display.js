var config = {
apiKey: "AIzaSyCFXQqvJGGpcNeSittYro6zy5e03itmDLg",
  authDomain: "ideainnovationcell.firebaseapp.com",
  databaseURL: "https://ideainnovationcell.firebaseio.com",
  projectId: "ideainnovationcell",
  storageBucket: "ideainnovationcell.appspot.com",
  messagingSenderId: "368936158980",
  appId: "1:368936158980:web:14751bb19594425bfcb251",
  measurementId: "G-4E9R4VDDRL"
 
};
firebase.initializeApp(config);

var hjcordiref= firebase.database().ref("articles");
     hjcordiref.orderByChild("article1").on("value", function(data){
          var newVoke= data.val();
         

        var tg= document.getElementById("count");
         tg.textContent= newVoke.article1;
        
         
          });
          var h2jcordiref= firebase.database().ref("articles");
               h2jcordiref.orderByChild("article2").on("value", function(data){
          var newVoke= data.val();
         

        var tgh= document.getElementById("count2");
         tgh.textContent= newVoke.article2;
        
         
          });
