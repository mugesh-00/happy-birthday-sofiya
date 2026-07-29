
function showMessage() {
    document.getElementById("msg").style.display = "block";
    document.querySelector(".gallery").style.display = "grid";
    document.getElementById("proposal").style.display = "block";
      firework();
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
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(
            x + Math.random() * 100 - 50,
            y + Math.random() * 100 - 50,
            3,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
        ctx.fill();
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 500);
}
