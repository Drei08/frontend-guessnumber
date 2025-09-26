const img = document.getElementById("img__picture");

const user = JSON.parse(localStorage.getItem("user"));
user.picture;

img.src = `data:image/png;base64,${user.picture}`;