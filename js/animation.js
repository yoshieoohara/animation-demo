// loading
document.addEventListener("DOMContentLoaded", () => {
  // localStorageの"visited"を確認
  if (!localStorage.getItem("visited")) {
    // 初回訪問時のみアニメーションを実行
    setTimeout(() => {
      document.querySelector(".top-container").style.opacity = "1";
      document.querySelector(".top-container").style.transform = "translateX(0)";
      localStorage.setItem("visited", "true");  // 初回訪問のマークをlocalStorageに保存
    }, 3000); // 3秒後に表示
  } else {
    // 2回目以降はすぐに表示
    document.querySelector(".top-container").style.opacity = "1";
    document.querySelector(".top-container").style.transform = "translateX(0)";
  }
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin();

  let slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  let duration = 3; // 各スライドの表示時間（秒）

  // 10秒後にスクロールアローを表示（固定）
  setTimeout(() => {
    gsap.to(".scroll-arrow", { opacity: 1, duration: 0.5 });
  }, 8000);

  // スライド表示関数
  function showSlide(index) {
    let currentSlide = slides[index];

    // 全スライドを非表示にする
    gsap.set(slides, { opacity: 0, zIndex: 0 });
    gsap.set(currentSlide, { opacity: 1, zIndex: 1 });

    let tl = gsap.timeline();

    if (currentSlide.querySelector("img")) {
      let mask = currentSlide.querySelector(".mask");
      let img = currentSlide.querySelector("img");

      gsap.set(img, { opacity: 0, scale: 0.9 });

      tl.to(mask, { x: "100%", duration: 0.8, ease: "power2.out" })
        .to(img, { opacity: 1, scale: 1.1, duration: 2.5, ease: "power1.out" }, "-=0.5");
    } else {
      let text = currentSlide.querySelector(".text");

      tl.fromTo(text, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    }

    // 次のスライドを遅延して表示
    gsap.delayedCall(duration, hideSlide, [index]);
  }

  function hideSlide(index) {
    gsap.to(slides[index], {
      opacity: 0,
      duration: 1.0,
      ease: "power2.inOut",
      onComplete: () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
    });
  }

  // 初回スライド開始
  showSlide(currentIndex);
});

// image-animation
$(window).scroll(function () {
  fadeIn();
});

// scroll
$(window).scroll(function () {
  $(".anime__wrap").each(function () {
    var offset = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();

    if (scroll > offset - wHeight + wHeight / 2) {
      $(this).addClass("show");
    }
  });
});

// fade-animation
// fadeUp
function fadeIn() {
  $(".fadeUpTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
  // fadeIn
  $(".fadeUpTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeUp");
      $(this).removeClass("fadeUp");
    }
  });
  // fadeLeft
  $(".fadeLeftTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeLeft");
    } else {
      $(this).removeClass("fadeLeft");
    }
  });
  // fadeRight
  $(".fadeRightTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeRight");
    } else {
      $(this).removeClass("fadeRight");
    }
  });
}

// text-03
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", function () {
    const slideUpText = document.querySelectorAll(".animation__text4");
    new SplitType(slideUpText);
    slideUpText.forEach((element) => {
      const chars = element.querySelectorAll(".char");
      gsap.to(chars, {
        opacity: 1,
        stagger: 0.06,
        delay: 1,
      });
    });
  });
});

// text-04
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".animation__text3");

$target.addClass(CLASSNAME);
setTimeout(() => {
  $target.removeClass(CLASSNAME);
}, TIMEOUT);