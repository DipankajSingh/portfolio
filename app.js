const dot = document.getElementById("cursor-dot");
const circle = document.getElementById("cursor-circle");
const opacity = dot.style.opacity == 1 && circle.style.opacity == 1;

let dotX = 0,
    dotY = 0,
    circleX = 0,
    circleY = 0;
document.addEventListener("mousemove", (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
    dot.style.top = `${dotY}px`;
    dot.style.left = `${dotX}px`;
    if (!opacity) {
        dot.style.opacity = circle.style.opacity = 1;
    }
});

const circleAnimation = () => {
    const parts = 6;
    circleX += (dotX - circleX) / parts;
    circleY += (dotY - circleY) / parts;
    circle.style.top = `${circleY}px`;
    circle.style.left = `${circleX}px`;
    window.requestAnimationFrame(circleAnimation);
};
window.requestAnimationFrame(circleAnimation);

// document.querySelectorAll("a").forEach((element) => {
//   element.addEventListener("mouseover", (e) => {
//     circle.style.backgroundColor = `rgba(255, 255, 255, 0.4)`;
//     circle.style.border = `1px solid transparent`;
//     circle.style.width = `80px`;
//     circle.style.height = `80px`;
//   });
//   element.addEventListener("mouseleave", (e) => {
//     circle.style.backgroundColor = `rgba(255, 255, 255, 0)`;
//     circle.style.border = `1px solid #fff`;
//     circle.style.width = "50px";
//     circle.style.height = "50px";
//   });
// });
