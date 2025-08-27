
        // Initialize AOS animations
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });

        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
   // New Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // New Hero Slider Logic
    const heroSlider = document.querySelector('.hero-slider');
    const sliderDotsContainer = document.getElementById('slider-dots');
    if (heroSlider && sliderDotsContainer) {
        const slides = heroSlider.children;
        let currentIndex = 0;
        const slideInterval = 5000; // 5 seconds
        let autoSlideTimer;

        // Create dots
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            sliderDotsContainer.appendChild(dot);
        }

        const dots = sliderDotsContainer.querySelectorAll('.slider-dot');

        function goToSlide(index) {
            heroSlider.style.transform = `translateX(-${index * 100}%)`;
            updateDots(index);
            currentIndex = index;
        }

        function updateDots(index) {
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }

        function startAutoSlide() {
            autoSlideTimer = setInterval(nextSlide, slideInterval);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideTimer);
            startAutoSlide();
        }

        // Initial setup
        goToSlide(0);
        startAutoSlide();
    }
});
        // Smooth scroll for navigation links
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerHeight = 64; // nav height
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    mobileMenu.classList.remove('active');
                });
            });
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-gym-dark');
                navbar.classList.remove('bg-gym-dark/95');
            } else {
                navbar.classList.add('bg-gym-dark/95');
                navbar.classList.remove('bg-gym-dark');
            }
        });
  