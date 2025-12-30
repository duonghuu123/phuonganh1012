const heart = document.getElementById("heart");

let colors = ["#ff0033", "#ff4d6d", "#ff7aa2", "#ff1a75"];
let index = 0;

heart.addEventListener("click", () => {
    index = (index + 1) % colors.length;

    heart.style.background = colors[index];
    heart.style.boxShadow = `0 0 50px ${colors[index]}`;

    heart.classList.remove("float");
    void heart.offsetWidth; // reset animation
    heart.classList.add("float");

    createSparkle();
});

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.fontSize = "20px";
    sparkle.style.left = Math.random() * 100 + "px";
    sparkle.style.top = Math.random() * 100 + "px";
    sparkle.style.animation = "fade 1s linear forwards";

    heart.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}
