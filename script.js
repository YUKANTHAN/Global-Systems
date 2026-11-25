// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
        const isOpening = !nav.classList.contains('active');
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = isOpening ? 'hidden' : '';
    });

    const navLinks = document.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Header Scroll Effect (throttled with rAF for performance)
const header = document.getElementById('header');
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on URL Path
const currentPath = window.location.pathname;
const navLinksItems = document.querySelectorAll('.nav-link');

navLinksItems.forEach(link => {
    const linkPath = link.getAttribute('href');
    if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && linkPath === 'index.html') {
        link.classList.add('active');
    }
    else if (!currentPath.endsWith('/') && !currentPath.endsWith('index.html') && currentPath.includes(linkPath)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Intersection Observer for Scroll Reveal Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Staggered animations for grid elements
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const children = Array.from(entry.target.querySelectorAll('.reveal-stagger'));
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('active');
                }, index * 100);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.services-grid').forEach(grid => {
    staggerObserver.observe(grid);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you! Your request has been sent to the Global Info Sys team.');
            contactForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// ============================================================
// Horizontal Scroll Carousel with Drag Support
// ============================================================
function createCarousel(trackId, prevBtnId, nextBtnId, dotsContainerId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsContainerId);

    if (!track || !prevBtn || !nextBtn || !dotsContainer) return null;

    const cards = Array.from(track.children);
    let currentIndex = 0;

    function getCardWidth() {
        if (cards.length === 0) return 0;
        const gap = parseInt(getComputedStyle(track).gap) || 24;
        return cards[0].offsetWidth + gap;
    }

    function getVisibleCount() {
        const outerWidth = track.parentElement.offsetWidth;
        const cw = getCardWidth();
        return cw > 0 ? Math.round(outerWidth / cw) : 1;
    }

    function getTotalSteps() {
        const visible = getVisibleCount();
        return Math.max(0, cards.length - visible);
    }

    function updateButtons() {
        const total = getTotalSteps();
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= total;
    }

    function buildDots() {
        dotsContainer.innerHTML = '';
        const total = getTotalSteps();
        for (let i = 0; i <= total; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function goTo(index) {
        const total = getTotalSteps();
        currentIndex = Math.max(0, Math.min(index, total));
        const offset = currentIndex * getCardWidth();
        track.style.transition = 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(-${offset}px)`;
        updateDots();
        updateButtons();
    }

    function goNext() {
        goTo(currentIndex + 1);
    }

    function goPrev() {
        goTo(currentIndex - 1);
    }

    function snap() {
        goTo(currentIndex);
    }

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);

    window.addEventListener('resize', () => {
        currentIndex = 0;
        track.style.transform = 'translateX(0)';
        buildDots();
        updateButtons();
    });

    buildDots();
    updateButtons();

    // Drag/swipe support
    const outer = track.parentElement;
    let isDown = false;
    let startX = 0;
    let dragDistance = 0;

    outer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        dragDistance = 0;
        outer.style.cursor = 'grabbing';
    });

    outer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        dragDistance = e.pageX - startX;
        const offset = currentIndex * getCardWidth();
        track.style.transition = 'none';
        track.style.transform = `translateX(${dragDistance * 0.3 - offset}px)`;
    });

    function endDrag() {
        isDown = false;
        outer.style.cursor = '';
        if (Math.abs(dragDistance) > 60) {
            if (dragDistance < 0) goNext();
            else goPrev();
        } else {
            snap();
        }
        dragDistance = 0;
    }

    outer.addEventListener('mouseleave', endDrag);
    outer.addEventListener('mouseup', endDrag);

    // Touch support
    outer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        dragDistance = 0;
    }, { passive: true });

    outer.addEventListener('touchmove', (e) => {
        dragDistance = e.touches[0].pageX - startX;
        const offset = currentIndex * getCardWidth();
        track.style.transition = 'none';
        track.style.transform = `translateX(${dragDistance * 0.3 - offset}px)`;
    }, { passive: true });

    outer.addEventListener('touchend', () => {
        if (Math.abs(dragDistance) > 60) {
            if (dragDistance < 0) goNext();
            else goPrev();
        } else {
            snap();
        }
        dragDistance = 0;
    }, { passive: true });

    return { goNext, goPrev, snap, goTo };
}

// Initialize products carousel
createCarousel('prodTrack', 'prodPrev', 'prodNext', 'prodDots');

// Initialize services carousel
createCarousel('svcTrack', 'svcPrev', 'svcNext', 'svcDots');

// ============================================================
// Hero Image Carousel (fade + auto-slide)
// ============================================================
(function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    const dotsContainer = document.getElementById('heroDots');
    if (!slides.length) return;

    let current = 0;
    let interval;

    function goTo(index) {
        slides.forEach((s, i) => s.classList.remove('active'));
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        updateDots();
        resetTimer();
    }

    function goNext() {
        goTo(current + 1);
    }

    function goPrev() {
        goTo(current - 1);
    }

    function resetTimer() {
        clearInterval(interval);
        interval = setInterval(goNext, 4000);
    }

    // Build dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    // Pause on hover
    var carousel = document.getElementById('home');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(interval));
        carousel.addEventListener('mouseleave', resetTimer);
    }

    // Touch swipe support
    var startX = 0;
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        carousel.addEventListener('touchend', (e) => {
            var endX = e.changedTouches[0].clientX;
            var diff = startX - endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) goNext();
                else goPrev();
            }
        }, { passive: true });
    }

    resetTimer();
})();

// ============================================================
// Full Screen Image Viewer (Lightbox)
// ============================================================
(function initFullscreenViewer() {
    const viewer = document.getElementById('fullscreenViewer');
    const fullscreenImg = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('fullscreenClose');
    const prevBtn = document.getElementById('fullscreenPrev');
    const nextBtn = document.getElementById('fullscreenNext');
    const counter = document.getElementById('fullscreenCounter');
    const dotsContainer = document.getElementById('fullscreenDots');

    if (!viewer || !fullscreenImg) return;

    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function getImages() {
        return Array.from(slides).map(slide => {
            const img = slide.querySelector('img');
            return img ? { src: img.getAttribute('src'), alt: img.getAttribute('alt') } : null;
        }).filter(Boolean);
    }

    function buildDots(count) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('button');
            dot.classList.add('fs-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(i);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.fs-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function showImage(index) {
        const images = getImages();
        if (!images.length) return;
        currentIndex = (index + images.length) % images.length;
        fullscreenImg.setAttribute('src', images[currentIndex].src);
        fullscreenImg.setAttribute('alt', images[currentIndex].alt);
        counter.textContent = (currentIndex + 1) + ' / ' + images.length;
        updateDots();
    }

    function open(index) {
        const images = getImages();
        if (!images.length) return;
        currentIndex = index;
        document.body.style.overflow = 'hidden';
        viewer.classList.add('active');
        buildDots(images.length);
        showImage(currentIndex);
    }

    function close() {
        document.body.style.overflow = '';
        viewer.classList.remove('active');
    }

    function goNext(e) {
        if (e) e.stopPropagation();
        showImage(currentIndex + 1);
    }

    function goPrev(e) {
        if (e) e.stopPropagation();
        showImage(currentIndex - 1);
    }

    // Click on carousel images to open full screen
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('active')) {
                open(index);
            }
        });
    });

    // Also make images themselves clickable directly
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                open(index);
            });
        }
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            close();
        });
    }

    // Navigation buttons
    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    // Close on backdrop click
    viewer.addEventListener('click', (e) => {
        if (e.target === viewer) close();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!viewer.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
    });

    // Touch swipe support for fullscreen
    let touchStartX = 0;
    let touchEndX = 0;

    viewer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext();
            else goPrev();
        }
    }, { passive: true });
})();
