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

function header() {
  gsap.from('.header', {
    y: -300,
    opacity: 0,
    duration: 1,
  })
}
header();

function home() {
  gsap.from('.home_page', {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: 1,
  })
}
home();

function box() {
  const boxPage = document.querySelector("#boxPage");
  const main = document.querySelector("#main");
  const box = document.querySelector(".box");

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

function design() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".design_pages",
      pin: true,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
  
  tl.from(".images_anim .one", {
    duration:5,
    ease: "power1.out",
    y: 3000,
    delay: 1,
    rotate: '-50deg'
  },'a')
  
  tl.from(".images_anim .two", {
    duration:5,
    ease: "power1.out",
    y: 2000,
    delay: 3,
    rotate: '-50deg'
  },'a')
  
  tl.from(".images_anim .three", {
    duration:5,
    ease: "power1.out",
    y: 1500,
    delay: 5,
    rotate: '-50deg'
  
  },'a')
}
design();

function sir() {
  let clutter = "";

  let text = document.querySelector(".sir_page p");

  text.textContent.split(" ").forEach((el) => {
    clutter += `<span> ${el} </span>`;

    document.querySelector(".sir_page p").innerHTML = clutter;
  });

  gsap.to(".sir_page p span", {
    scrollTrigger: {
      trigger: `.sir_page p span`,
      start: `top bottom`,
      end: `bottom top`,
      scroller: `body`,
      scrub: 0.5,
    },
    stagger: 0.5,
    color: `#000000`,
  });
}
sir();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },

  breakpoints: {
    700: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
  }
});

function canvas() {
  const canvas = document.querySelector(".canvas_page > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `https://qclay.design/images/startups/frames/rope_001.webp
https://qclay.design/images/startups/frames/rope_002.webp
https://qclay.design/images/startups/frames/rope_003.webp
https://qclay.design/images/startups/frames/rope_004.webp
https://qclay.design/images/startups/frames/rope_005.webp
https://qclay.design/images/startups/frames/rope_006.webp
https://qclay.design/images/startups/frames/rope_007.webp
https://qclay.design/images/startups/frames/rope_008.webp
https://qclay.design/images/startups/frames/rope_009.webp
https://qclay.design/images/startups/frames/rope_010.webp
https://qclay.design/images/startups/frames/rope_011.webp
https://qclay.design/images/startups/frames/rope_012.webp
https://qclay.design/images/startups/frames/rope_013.webp
https://qclay.design/images/startups/frames/rope_014.webp
https://qclay.design/images/startups/frames/rope_015.webp
https://qclay.design/images/startups/frames/rope_016.webp
https://qclay.design/images/startups/frames/rope_017.webp
https://qclay.design/images/startups/frames/rope_018.webp
https://qclay.design/images/startups/frames/rope_019.webp
https://qclay.design/images/startups/frames/rope_020.webp
https://qclay.design/images/startups/frames/rope_021.webp
https://qclay.design/images/startups/frames/rope_022.webp
https://qclay.design/images/startups/frames/rope_023.webp
https://qclay.design/images/startups/frames/rope_024.webp
https://qclay.design/images/startups/frames/rope_025.webp
https://qclay.design/images/startups/frames/rope_026.webp
https://qclay.design/images/startups/frames/rope_027.webp
https://qclay.design/images/startups/frames/rope_028.webp
https://qclay.design/images/startups/frames/rope_029.webp
https://qclay.design/images/startups/frames/rope_030.webp
https://qclay.design/images/startups/frames/rope_031.webp
https://qclay.design/images/startups/frames/rope_032.webp
https://qclay.design/images/startups/frames/rope_033.webp
https://qclay.design/images/startups/frames/rope_034.webp
https://qclay.design/images/startups/frames/rope_035.webp
`;
    return data.split("\n")[index];
  }

  const frameCount = 35;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.canvas_page`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".canvas_page",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();


function canvasPages() {
  gsap.from(".canvas_page", {
    scale: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".canvas_page canvas",
      scroller: "body",
      start: "top 100%",
      end: "top -50%",
      scrub: 0.5,
    },
  });
  
}
canvasPages();