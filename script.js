// 3D tilt effect for hero box
const heroBox = document.getElementById("heroBox");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  heroBox.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
});

document.addEventListener("mouseleave", () => {
  heroBox.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
});
