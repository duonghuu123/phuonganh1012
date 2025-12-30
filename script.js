const heart = document.getElementById("heart");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bgMusic");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

let W = document.documentElement.clientWidth;
let H = document.documentElement.clientHeight;

/* PHÁT NHẠC SAU TƯƠNG TÁC */
function startMusic() {
    music.volume = 0.18;
    music.play().catch(() => {});
    document.removeEventListener("mousemove", startMusic);
    document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("mousemove", startMusic);
document.addEventListener("touchstart", startMusic);

/* HIỆN DÒNG CHỮ KẾT */
setTimeout(() => {
    finalMessage.style.opacity = 1;
}, 10000);

/* TRÁI TIM CHUYỂN ĐỘNG */
let angle = 0;
const radius = 30;

/* ẢNH */
const objects = [
    { el: img1, x: 60, y: 60, vx: 1.1, vy: 1.0 },
    { el: img2, x: W - 340, y: 60, vx: -1.0, vy: 1.1 },
    { el: img3, x: (W - 280) / 2, y: H - 420, vx: 1.0, vy: -1.1 }
];

function animate() {
    angle += 0.01;
    heart.style.transform =
        `translate(calc(-50% + ${Math.cos(angle) * radius}px),
                   calc(-50% + ${Math.sin(angle) * radius}px))
         rotate(-45deg)`;

    objects.forEach(o => {
        o.x += o.vx;
        o.y += o.vy;

        if (o.x < 60 || o.x > W - 340) o.vx *= -1;
        if (o.y < 60 || o.y > H - 420) o.vy *= -1;

        o.el.style.left = o.x + "px";
        o.el.style.top = o.y + "px";
    });

    requestAnimationFrame(animate);
}
animate();

/* CẬP NHẬT KHI RESIZE */
window.addEventListener("resize", () => {
    location.reload();
});

/* SPARKLE TIM TRẮNG */
document.addEventListener("mousemove", e => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "♡";
    s.style.left = e.pageX + "px";
    s.style.top = e.pageY + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
});
