const heart = document.getElementById("heart");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bgMusic");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

/* PHÁT NHẠC SAU TƯƠNG TÁC ĐẦU TIÊN */
function startMusic() {
    music.volume = 0.2;
    music.play().catch(() => {});
    document.removeEventListener("mousemove", startMusic);
    document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("mousemove", startMusic);
document.addEventListener("touchstart", startMusic);

/* DÒNG CHỮ KẾT SAU 10 GIÂY */
setTimeout(() => {
    finalMessage.style.opacity = 1;
}, 10000);

/* TRÁI TIM BAY QUANH TRUNG TÂM */
let angle = 0;
const radius = 25;

/* ẢNH – VỊ TRÍ + TỐC ĐỘ */
const objects = [
    { el: img1, x: 40, y: 40, vx: 0.9, vy: 0.8 },
    { el: img2, x: window.innerWidth - 220, y: 40, vx: -0.85, vy: 0.9 },
    {
        el: img3,
        x: (window.innerWidth - 180) / 2,
        y: window.innerHeight - 260,
        vx: 0.8,
        vy: -0.9
    }
];

function animate() {
    angle += 0.01;
    const hx = Math.cos(angle) * radius;
    const hy = Math.sin(angle) * radius;

    heart.style.transform =
        `translate(calc(-50% + ${hx}px), calc(-50% + ${hy}px)) rotate(-45deg)`;

    objects.forEach(obj => {
        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x < 40 || obj.x > window.innerWidth - 220) obj.vx *= -1;
        if (obj.y < 40 || obj.y > window.innerHeight - 260) obj.vy *= -1;

        obj.el.style.left = obj.x + "px";
        obj.el.style.top = obj.y + "px";
    });

    requestAnimationFrame(animate);
}

animate();

/* SPARKLE TIM TRẮNG THEO CHUỘT */
document.addEventListener("mousemove", e => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "♡";
    s.style.left = e.pageX + "px";
    s.style.top = e.pageY + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
});
