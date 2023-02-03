importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('firebase-messaging.js');

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

const messaging= firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='Idea Innovation Cell';
    const options={
      body: payload.data.message,
      icon: payload.data.icon,
      image:payload.data.image,
        data:{
      click_action: payload.data.click_action
        }
      
    };
    return self.registration.showNotification(title,options);
    
});
self.addEventListener('notificationclick', function(event){
    var action_click=event.notification.data.click_action;
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(action_click)
    );
    
});