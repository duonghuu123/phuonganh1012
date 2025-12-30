const heart = document.getElementById("heart");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bgMusic");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

/* 🎵 PHÁT NHẠC NỀN (SAU TƯƠNG TÁC NHẸ) */
document.addEventListener("mousemove", () => {
    music.volume = 0.25;
    music.play().catch(() => {});
}, { once: true });

/* 💌 HIỆN DÒNG CHỮ KẾT SAU 10 GIÂY */
setTimeout(() => {
    finalMessage.style.opacity = 1;
}, 10000);

/* ❤️ TRÁI TIM BAY QUANH TRUNG TÂM */
let heartAngle = 0;
const heartRadius = 25;

/* 🖼️ ẢNH KHỞI TẠO */
const objects = [
    { el: img1, x: 30, y: 30, vx: 0.6, vy: 0.5 },
    { el: img2, x: window.innerWidth - 230, y: 30, vx: -0.55, vy: 0.6 },
    {
        el: img3,
        x: window.innerWidth / 2 - 100,
        y: window.innerHeight - 230,
        vx: 0.5,
        vy: -0.55
    }
];

/* LOOP */
function animate() {
    heartAngle += 0.01;
    const hx = Math.cos(heartAngle) * heartRadius;
    const hy = Math.sin(heartAngle) * heartRadius;

    heart.style.transform =
        `translate(calc(-50% + ${hx}px), calc(-50% + ${hy}px)) rotate(-45deg)`;

    objects.forEach(obj => {
        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x < 20 || obj.x > window.innerWidth - 220) obj.vx *= -1;
        if (obj.y < 20 || obj.y > window.innerHeight - 220) obj.vy *= -1;

        obj.el.style.left = obj.x + "px";
        obj.el.style.top = obj.y + "px";
    });

    requestAnimationFrame(animate);
}

animate();

/* 🌸 SPARKLE TIM TRẮNG THEO CHUỘT */
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "♡";

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});
