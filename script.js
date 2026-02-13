const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

let yesScale = 1;

/* START MUSIC ON FIRST CLICK */
document.body.addEventListener("click", function startMusic() {
    bgm.volume = 0.6;
    bgm.play().catch(() => {});
    document.body.removeEventListener("click", startMusic);
});

/* LINE-BY-LINE ANIMATION */
window.addEventListener("load", function () {

    const lines = document.querySelectorAll(
        ".section h1, .section h2, .section p, .section .love-item"
    );

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("show-line");
        }, index * 500);
    });

});

/* NO BUTTON MOVE */
function moveNo() {
    clickSound.play();

    const moveX = Math.random() * 140 - 70;
    const moveY = Math.random() * 80 - 40;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
}

/* YES BUTTON CLICK */
function yesClick() {
    clickSound.play();
    yesBtn.style.transform = "scale(1.6)";
    createFloatingEmojis();
    showPopup();
}

/* POPUP */
function showPopup() {
    const popup = document.createElement("div");
    popup.className = "popup-overlay";

    popup.innerHTML = `
        <div class="popup-box">
            <h3>She said YES 💖</h3>
            <p>Best decision ever 😌✨</p>
        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}

/* FLOATING EMOJIS */
function createFloatingEmojis() {
    const emojis = ["💖","💕","✨","🥰","💞","😻"];

    for (let i = 0; i < 25; i++) {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";

        const direction = Math.random() > 0.5 ? "floatUp" : "floatDown";
        emoji.style.animation = `${direction} ${3 + Math.random()*2}s linear`;

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }
}
