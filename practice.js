var firebaseConfig = {
  apiKey: "AIzaSyDWa77nuALK7TPF_BdYj5Qtskc85Z6hqns",
  authDomain: "vamos-conversar-ca685.firebaseapp.com",
  databaseURL: "https://vamos-conversar-ca685-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-ca685",
  storageBucket: "vamos-conversar-ca685.appspot.com",
  messagingSenderId: "330343652019",
  appId: "1:330343652019:web:d7c0c410717464b0d0eec6"
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