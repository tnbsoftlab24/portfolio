// ==========================================
// PORTFOLIO RAFFINÉ - Interactions Fluides
// ==========================================

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Restart terminal typing if switching to dark
    if (newTheme === 'dark') {
        setTimeout(() => startTyping(), 300);
    }
});

// ========== TERMINAL TYPING EFFECT ==========
const commands = [
    'rails server',
    'git push origin main',
    'docker-compose up',
    'bundle install',
    'npm run dev'
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement;

function startTyping() {
    typingElement = document.querySelector('.typing');
    if (!typingElement) return;
    
    commandIndex = 0;
    charIndex = 0;
    isDeleting = false;
    type();
}

function type() {
    if (!typingElement) return;
    
    const currentCommand = commands[commandIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    if (isDeleting) {
        typingElement.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentCommand.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        setTimeout(type, 500);
        return;
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing on load if dark mode
document.addEventListener('DOMContentLoaded', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        setTimeout(startTyping, 1000);
    }
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = 80;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========== ACTIVE NAVIGATION ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ========== FADE IN ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
function initAnimations() {
    const elements = document.querySelectorAll(`
        .hero-badge,
        .hero-title,
        .hero-description,
        .hero-stats,
        .hero-actions,
        .terminal,
        .glass,
        .section-header
    `);
    
    elements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
}

// ========== SKILLS PROGRESS BARS ==========
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillFills = entry.target.querySelectorAll('.skill-fill');
            
            skillFills.forEach((fill, index) => {
                const percent = fill.getAttribute('data-percent');
                setTimeout(() => {
                    fill.style.width = `${percent}%`;
                }, index * 100);
            });
            
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillsObserver.observe(category);
});

// ========== MOBILE MENU ==========
const mobileToggle = document.getElementById('mobileToggle');
const navLinksContainer = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navLinksContainer.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// ========== PARALLAX EFFECT (SUBTLE) ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroTerminal = document.querySelector('.hero-terminal');
    
    if (heroTerminal && scrolled < 800) {
        heroTerminal.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// ========== STATS COUNTER ANIMATION ==========
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const isPercentage = stat.textContent.includes('%');
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = isPercentage ? `${target}%` : `${target}+`;
                        clearInterval(counter);
                    } else {
                        stat.textContent = isPercentage ? 
                            `${Math.floor(current)}%` : 
                            `${Math.floor(current)}+`;
                    }
                }, 30);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ========== CURSOR TRAIL EFFECT (OPTIONAL) ==========
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    
    cursorTrail.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
    });
    
    // Remove old points
    cursorTrail = cursorTrail.filter(point => 
        Date.now() - point.timestamp < 1000
    );
    
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

// ========== CONSOLE EASTER EGG ==========
const theme = html.getAttribute('data-theme');
const primaryColor = theme === 'dark' ? '#10b981' : '#6366f1';

console.log(
    `%c👋 Hello! Welcome to Hervé's Portfolio`,
    `color: ${primaryColor}; font-size: 18px; font-weight: bold;`
);

console.log(
    `%cType portfolio.info() for more details`,
    `color: ${primaryColor}; font-size: 14px;`
);

window.portfolio = {
    info: function() {
        console.log(`%c
╔═══════════════════════════════════════════╗
║        Hervé Noukpo Portfolio Info        ║
╚═══════════════════════════════════════════╝

👨‍💻 Full Stack Developer
📍 Chessy (77700), France
💼 6+ years experience
🎯 Ruby on Rails specialist (95%)
📧 noukpoherve@hotmail.com
🔗 linkedin.com/in/noukpohervehoundjetode
💻 github.com/noukpoherve

🚀 Tech Stack:
   • Backend: Ruby on Rails, Python
   • Frontend: React, Next.js, TypeScript
   • Database: PostgreSQL, MongoDB
   • DevOps: Docker, CI/CD
   • AI: OpenAI API

✨ Featured Projects:
   • liretama.com
   • procurementfreelancers.com

📬 Available for stage alterné (1 week courses / 3 weeks company)
        `, `font-family: 'Fira Code', monospace; color: ${primaryColor};`);
    },
    
    theme: function() {
        const current = html.getAttribute('data-theme');
        console.log(`Current theme: ${current}`);
        console.log('Change theme by clicking the toggle button! 🌙☀️');
    },
    
    skills: function() {
        console.log(`%c
🔧 Technical Skills:

Backend (95%):
  • Ruby on Rails ████████████████████ 95%
  • Python        ███████████████░░░░░ 75%
  • REST API      ██████████████████░░ 90%

Frontend (88%):
  • React/Next.js ████████████████░░░░ 88%
  • Stimulus.js   ████████████████░░░░ 85%
  • Tailwind      ██████████████████░░ 90%

Database (85%):
  • PostgreSQL    ██████████████████░░ 90%
  • MongoDB       ████████████████░░░░ 80%
  • Supabase      ████████████████░░░░ 85%

DevOps & AI (85%):
  • Docker        ████████████████░░░░ 85%
  • OpenAI API    ████████████████░░░░ 87%
  • CI/CD         ████████████████░░░░ 83%
        `, `font-family: 'Fira Code', monospace; color: ${primaryColor};`);
    }
};

// ========== INITIALIZATION ==========
window.addEventListener('load', () => {
    initAnimations();
    highlightNav();
});

// ========== PERFORMANCE OPTIMIZATIONS ==========
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to expensive scroll operations
window.addEventListener('scroll', debounce(() => {
    highlightNav();
}, 50));

// Lazy load images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
