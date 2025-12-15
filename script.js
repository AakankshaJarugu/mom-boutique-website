/* ============================================
   ELEGANT INDIAN FASHION - LUXURY BOUTIQUE
   Intro Animation & Sparkle Effects
   ============================================ */

// Create Sparkle Particles for Intro
function createIntroSparkles() {
    const sparklesContainer = document.getElementById('introSparkles');
    if (!sparklesContainer) return;

    const brandName = document.getElementById('introBrandName');
    if (!brandName) return;

    const rect = brandName.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create multiple sparkle particles around the brand name
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-particle';
        
        // Random position around the brand name
        const angle = (Math.PI * 2 * i) / 30;
        const radius = 150 + Math.random() * 100;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        // Random animation delay and duration
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 2;
        sparkle.style.animationDelay = delay + 's';
        sparkle.style.animationDuration = duration + 's';
        
        // Random movement direction
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Handle Intro Animation Transition
function handleIntroTransition() {
    const introOverlay = document.getElementById('introOverlay');
    if (!introOverlay) return;

    // Wait 2.5 seconds for intro animation to complete
    setTimeout(() => {
        introOverlay.classList.add('hidden');
        
        // Remove intro overlay from DOM after transition
        setTimeout(() => {
            if (introOverlay.parentNode) {
                introOverlay.style.display = 'none';
            }
        }, 800);
    }, 2500);
}

// Initialize Intro Animation
document.addEventListener('DOMContentLoaded', () => {
    // Create sparkle particles immediately
    createIntroSparkles();
    
    // Handle transition after animation
    handleIntroTransition();
    
    console.log('Elegant Indian Fashion - Luxury Boutique website loaded!');
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.4)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards (after intro)
setTimeout(() => {
    const animatedElements = document.querySelectorAll(
        '.category-card, .product-card, .gallery-item, .about-text, .contact-info, .contact-form-container'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}, 3000);

// Product Card Hover Effects Enhancement
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Category Card Click Handler
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const collectionSection = document.querySelector('#collection');
        if (collectionSection) {
            const offsetTop = collectionSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// View Details Button Handler
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Product details coming soon! Contact us via WhatsApp or Instagram for more information.');
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = `Hello! I'm interested in your collection.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        showNotification('Thank you! Opening WhatsApp to send your message...', 'success');
        
        contactForm.reset();
    });
}

// Notification Function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #f40290, #fe6d01);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.5);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        border: 2px solid #FFD700;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Gallery Item Click Handler
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        window.open('https://instagram.com', '_blank');
    });
});

// Create Sparkle Particles Effect (for buttons and cards)
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #FFD700;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
        animation: sparkle-fade 1s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.remove();
        }
    }, 1000);
}

// Add sparkle animation to CSS
const sparkleFadeStyle = document.createElement('style');
sparkleFadeStyle.textContent += `
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0);
        }
    }
`;
document.head.appendChild(sparkleFadeStyle);

// Add sparkle effect on button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') || 
        e.target.classList.contains('view-details-btn') || 
        e.target.classList.contains('contact-btn')) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const rect = e.target.getBoundingClientRect();
                const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 60;
                const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 60;
                createSparkle(x, y);
            }, i * 50);
        }
    }
});

// Add sparkle effect on product card hover
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const rect = this.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createSparkle(x, y);
            }, i * 100);
        }
    });
});

// Parallax Effect for Hero Section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Add Glow Effect on Scroll for Section Titles
const sectionTitles = document.querySelectorAll('.section-title');
window.addEventListener('scroll', () => {
    sectionTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            title.style.filter = 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))';
        } else {
            title.style.filter = 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3))';
        }
    });
});
