var app_firebase = {};
(function(){

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCePlxykNPeo0H-4_Xh02RiHhUUisjUM7k",
    authDomain: "vmweb-2beb3.firebaseapp.com",
    databaseURL: "https://vmweb-2beb3.firebaseio.com",
    projectId: "vmweb-2beb3",
    storageBucket: "vmweb-2beb3.appspot.com",
    messagingSenderId: "698603346168"
  };
  firebase.initializeApp(config);
app_firebase = firebase;
})()