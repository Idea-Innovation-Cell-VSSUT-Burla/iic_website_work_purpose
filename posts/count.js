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
         
         console.log(data.val());
        var tg= document.getElementById("count");
         tg.textContent= newVoke.article1;
         var ty= newVoke.article1;
         if(localStorage.getItem("article1")== null)
    {
        ty=ty+1;
        localStorage.setItem("article1","true");
        var amnklhgjjkpliref = firebase.database().ref("articles");
    var data={
        article1:ty

}
    amnklhgjjkpliref.set(data);
    }
    
    });
    
    //post2
    
    var h2jcordiref= firebase.database().ref("articles");
     h2jcordiref.orderByChild("article2").on("value", function(data){
          var newVoke= data.val();
         
         console.log(data.val());
        var tg2= document.getElementById("count2");
         tg2.textContent= newVoke.article2;
         var ty2= newVoke.article2;
         if(localStorage.getItem("article2")== null)
    {
        ty2=ty2+1;
        localStorage.setItem("article2","true");
        var a2mnklhgjjkpliref = firebase.database().ref("articles");
    var data={
        article2:ty2

}
    a2mnklhgjjkpliref.set(data);
        
    }
         
          });
