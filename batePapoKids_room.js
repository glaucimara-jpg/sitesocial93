var  firebaseConfig = {
  apiKey: "AIzaSyB1iZQ-ReaPqyLw_M5I9MgdpHpi_cW97T0",
  authDomain: "conversa-3b565.firebaseapp.com",
  databaseURL: "https://conversa-3b565-default-rtdb.firebaseio.com",
  projectId: "conversa-3b565",
  storageBucket: "conversa-3b565.appspot.com",
  messagingSenderId: "256207699608",
  appId: "1:256207699608:web:a83ce6f665294b4aa81aed"
};
  
  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
     
      window.location = "batePapoKids_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "batePapoKids_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
