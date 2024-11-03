function lenis() {
  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenis();

function box() {
  const boxPage = document.querySelector("#boxPage");
  const main = document.querySelector("#main");

  main.addEventListener("mousemove", (e) => {
    gsap.to(boxPage, {
      x: e.x,
      y: e.y,
      duration: 0.5,
      ease: "power1.out",
    });
  });
}
box();

function VideoAnimted() {
  gsap.from(".video video", {
    scale: 0.8,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".video video",
      scroller: "body",
      start: "top 100%",
      end: "top -50%",
      scrub: 0.5,
    },
  });
}
VideoAnimted();

function menuPage() {
  const menuPage = document.querySelector(".menuPage");
  const menuBtn = document.querySelector("#menu");
  const navbar = document.querySelector(".navbar");

  let text = false;

  menuBtn.addEventListener("click", () => {
    menuPage.classList.toggle("show");

    if (!text) {
      menuBtn.innerText = "Close";
      navbar.style.opacity = "0";
      navbar.style.transition = "0.5s";
      text = true;
    } else {
      menuBtn.innerText = "menu";
      navbar.style.opacity = "1";
      text = false;
    }
  });
}
menuPage();

function Slides() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -300,
    ease: Power4,
  });
}
Slides();
