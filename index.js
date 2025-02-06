const noBtn = document.getElementById("noBtn");
const image = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x =  Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y =  Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    image.src = "images/angry.gif";
})

yesBtn.addEventListener("mouseover", () => {
    image.src = "images/celebrate.gif"
})
yesBtn.addEventListener("mouseout", () => {
    image.src = "images/heart.gif";
})
yesBtn.ariaBrailleRoleDescription


