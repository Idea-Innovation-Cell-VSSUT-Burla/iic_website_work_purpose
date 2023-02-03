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
