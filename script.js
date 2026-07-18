/* ==========================================
   GO GREEN (G Coin)
   Premium Website v2.0
   script.js - Part 1
========================================== */

// ================================
// Mobile Menu Toggle
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});

// ================================
// Sticky Header Effect
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(7,21,12,0.97)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(7,21,12,.90)";
        header.style.boxShadow = "none";

    }

});

// ================================
// Back To Top Button
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================================
   GO GREEN (G Coin)
   Premium Website v2.0
   script.js - Part 2
==========================================*/

// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
".about-card,.eco-card,.utility-card,.token-card,.stat-item,.timeline-item,.gallery-item,.faq-item,.contact-info,.contact-form"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Progress Animation
// ================================

const progressBars = document.querySelectorAll("progress");

const animateProgress = () => {

    progressBars.forEach(bar => {

        const value = bar.value;

        bar.value = 0;

        let start = 0;

        const timer = setInterval(() => {

            start++;

            bar.value = start;

            if (start >= value) {

                clearInterval(timer);

            }

        }, 15);

    });

};

animateProgress();


// ================================
// Gallery Hover Effect
// ================================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(1deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});


// ================================
// Hero Floating Effect
// ================================

const mascot = document.querySelector(".hero-image img");

if (mascot) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 60;

        const y = (window.innerHeight / 2 - e.pageY) / 60;

        mascot.style.transform =
        `translate(${x}px,${y}px)`;

    });

}


// ================================
// Console Message
// ================================

console.log("%c🌱 Welcome to Go Green (G Coin)",
"color:#22c55e;font-size:18px;font-weight:bold;");

console.log("%cOne Community. One Mission. One Greener Future.",
"color:white;font-size:14px;");

/* ==========================================
   Premium Climate Video
========================================== */

const thumb=document.getElementById("videoThumb");
const frame=document.getElementById("videoFrame");

if(thumb && frame){

thumb.addEventListener("click",()=>{

const iframe=frame.querySelector("iframe");

iframe.src=iframe.dataset.src;

thumb.style.display="none";

frame.style.display="block";

});

}
