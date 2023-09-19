var  firebaseConfig = {
  apiKey: "AIzaSyB1iZQ-ReaPqyLw_M5I9MgdpHpi_cW97T0",
  authDomain: "conversa-3b565.firebaseapp.com",
  databaseURL: "https://conversa-3b565-default-rtdb.firebaseio.com",
  projectId: "conversa-3b565",
  storageBucket: "conversa-3b565.appspot.com",
  messagingSenderId: "256207699608",
  appId: "1:256207699608:web:a83ce6f665294b4aa81aed"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  function addUser()
  {
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
      purpose : "adding user"
    });
  }
