const firebaseConfig = {
      apiKey: "AIzaSyC5J0ydyxt1wK1pauvOitqBu2fQW5dJwLM",
      authDomain: "kwitter-18779.firebaseapp.com",
      databaseURL: "https://kwitter-18779-default-rtdb.firebaseio.com",
      projectId: "kwitter-18779",
      storageBucket: "kwitter-18779.appspot.com",
      messagingSenderId: "374177809808",
      appId: "1:374177809808:web:055710bffc0a6aca1f9f15"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
