// PUT YOUR CODE HERE
window.addEventListener("DOMContentLoaded", () => {
  const Tl = gsap.timeline();

  Tl.from(".red", {
    x: -200,
    y: -200,
    duration: 1,
    ease: "pwer2.out",
  })
    .from(".green", {
      x: 200,
      y: -200,
      duration: 1,
      ease: "pwer2.out",
    })
    .from(".blue", {
      x: 200,
      y: 200,
      duration: 1,
      ease: "pwer2.out",
    })
    .from(".yellow", {
      x: -200,
      y: 200,
      duration: 1,
      ease: "pwer2.out",
    })
    .to(".red", {
      x: window.innerWidth - 200,
      borderRadius: "50%",
      backgroundColor: "green",
      duration: 1,
    }, ">")
    .to(".green", {
      y: window.innerHeight - 200,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
    }, "<")
    .to(".blue", {
      x: -(window.innerWidth - 200),
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
    }, "<")
    .to(".yellow", {
      y: -(window.innerHeight - 200),
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
    }, "<")
    .to(".yellow, .blue", {
      x: "-=500",
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    }, ">")
    .to(".red, .green", {
      x: "+=500",
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    }, "<");
});
