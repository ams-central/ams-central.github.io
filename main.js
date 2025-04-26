// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 75, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down & past threshold
        navbar.classList.add('nav-hidden');
    } else {
        // Scrolling up or at top
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Navbar collapse on mobile when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;
        
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize cards with opacity 0
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
}); 