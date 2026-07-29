
function showMessage() {
    document.getElementById("msg").style.display = "block";
    document.querySelector(".gallery").style.display = "grid";
    const music = document.getElementById("bgMusic");
    music.currentTime = 0;
    music.play().catch(error => console.log(error));
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
