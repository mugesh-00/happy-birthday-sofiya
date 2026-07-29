
function showMessage() {
    document.getElementById("msg").style.display = "block";
    document.querySelector(".gallery").style.display = "grid";
    document.getElementById("proposal").style.display = "block";
}
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);
function yesAnswer(){
    alert("❤️ Thank You My Love ❤️\nYou made me the happiest person in the world! 🥹💖");
}

function moveButton(){
    const btn = document.getElementById("noBtn");

    btn.style.position = "absolute";
    btn.style.left = Math.random()*250 + "px";
    btn.style.top = Math.random()*250 + "px";
}
