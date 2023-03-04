var firebaseConfig = {
    apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
    authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
    databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
    projectId: "project-93-letschat-web-app-1",
    storageBucket: "project-93-letschat-web-app-1.appspot.com",
    messagingSenderId: "599747272052",
    appId: "1:599747272052:web:04fa716f9c059b29902021"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0

    });

    document.getElementById("msg").value = "";

}


function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
