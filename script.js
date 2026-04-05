function sayHello() {
  alert("Hello Trogan! 👋");
}

function changeText() {
  document.getElementById("myText").innerHTML = "JavaScript changed me! 🔥";
}

function changeColor() {
  document.getElementById("myText").style.color = "gold";
}

function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name === "") {
    document.getElementById("greeting").innerHTML = "Please enter your name!";
  } else {
    document.getElementById("greeting").innerHTML = "Welcome, " + name + "! 🎉";
  }
}

function sendMessage() {
  let msg = document.getElementById("msgInput").value;
  if (msg === "") {
    document.getElementById("response").innerHTML = "Please type a message first!";
  } else {
    document.getElementById("response").innerHTML = "Message sent: '" + msg + "' ✅";
    document.getElementById("msgInput").value = "";
  }
}

let darkMode = true;

function toggleMode() {
  if (darkMode) {
    document.body.style.backgroundColor = "#f0f0f0";
    document.querySelector(".profile-card").style.backgroundColor = "white";
    document.querySelector(".profile-card").style.color = "black";
    darkMode = false;
  } else {
    document.body.style.backgroundColor = "#0a0a0a";
    document.querySelector(".profile-card").style.backgroundColor = "#1a1a1a";
    document.querySelector(".profile-card").style.color = "white";
    darkMode = true;
  }
}
