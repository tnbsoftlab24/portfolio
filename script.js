// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Typing Effect for Terminal
const commands = [
    'npm start',
    'git push origin main',
    'docker-compose up',
    'python manage.py runserver',
    'kubectl get pods',
    'terraform apply'
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeCommand() {
    const typingElement = document.getElementById('typingCommand');
    if (!typingElement) return;
    
    const currentCommand = commands[commandIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentCommand.length) {
        // Pause before deleting
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeCommand, typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeCommand, 1000);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add reveal animation to elements
function initRevealAnimation() {
    const elements = document.querySelectorAll(
        '.skill-category, .project-card, .metric-group, .info-item'
    );
    
    elements.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initRevealAnimation);

// Animate Skill Bars on Scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Terminal Command History (Easter Egg)
let commandHistory = [];
let historyIndex = -1;

document.addEventListener('keydown', (e) => {
    // Ctrl + L to clear console (easter egg)
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        console.clear();
        console.log('%c~$ Welcome to Jean Noel\'s Portfolio', 'color: #00ff41; font-size: 16px; font-family: monospace;');
        console.log('%c~$ Type "help" for available commands', 'color: #00cc33; font-size: 14px; font-family: monospace;');
    }
});

// Console Easter Eggs
console.log('%c~$ Welcome to Jean Noel\'s Portfolio', 'color: #00ff41; font-size: 16px; font-family: monospace; font-weight: bold;');
console.log('%c~$ Looking for something?', 'color: #4ecdc4; font-size: 14px; font-family: monospace;');
console.log('%c~$ Try these commands:', 'color: #00cc33; font-size: 14px; font-family: monospace;');
console.log('%c  - about()', 'color: #e0e0e0; font-size: 12px; font-family: monospace;');
console.log('%c  - skills()', 'color: #e0e0e0; font-size: 12px; font-family: monospace;');
console.log('%c  - projects()', 'color: #e0e0e0; font-size: 12px; font-family: monospace;');
console.log('%c  - contact()', 'color: #e0e0e0; font-size: 12px; font-family: monospace;');

// Console Commands (Easter Eggs)
window.about = function() {
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('%c About Jean Noel', 'color: #4ecdc4; font-size: 16px; font-family: monospace; font-weight: bold;');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('👨‍💻 Full Stack Developer');
    console.log('📍 Location: Paris, France');
    console.log('💼 Experience: 3+ years');
    console.log('🎯 Specialization: Backend & APIs');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
};

window.skills = function() {
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('%c Technical Skills', 'color: #4ecdc4; font-size: 16px; font-family: monospace; font-weight: bold;');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('Frontend: React, Vue.js, TypeScript');
    console.log('Backend: Node.js, Python, Go');
    console.log('Database: PostgreSQL, MongoDB, Redis');
    console.log('DevOps: Docker, Kubernetes, AWS');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
};

window.projects = function() {
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('%c Featured Projects', 'color: #4ecdc4; font-size: 16px; font-family: monospace; font-weight: bold;');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('1. API E-commerce Microservices');
    console.log('2. Pipeline de Traitement de Données');
    console.log('3. Système d\'Authentification SSO');
    console.log('\n💡 Scroll down to see more details!');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
};

window.contact = function() {
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('%c Contact Information', 'color: #4ecdc4; font-size: 16px; font-family: monospace; font-weight: bold;');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
    console.log('📧 Email: votre.email@example.com');
    console.log('💻 GitHub: github.com/votrenom');
    console.log('🔗 LinkedIn: linkedin.com/in/votrenom');
    console.log('\n📬 Scroll to contact section to send a message!');
    console.log('%c================================', 'color: #00ff41; font-family: monospace;');
};

// Matrix Rain Effect (Optional - can be commented out)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.03';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment to enable Matrix rain effect
// document.addEventListener('DOMContentLoaded', createMatrixRain);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:votre.email@example.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success in console
        console.log('%c~$ Message sent successfully!', 'color: #00ff41; font-size: 14px; font-family: monospace;');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✓ Message sent! Your email client should open.';
        successMsg.style.cssText = 'color: #00ff41; margin-top: 1rem; padding: 1rem; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; border-radius: 4px;';
        contactForm.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    });
}

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--terminal-accent)';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax Effect on Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < 800) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Random tech quotes in console (Easter Egg)
const techQuotes = [
    'Talk is cheap. Show me the code. - Linus Torvalds',
    'First, solve the problem. Then, write the code. - John Johnson',
    'Code is like humor. When you have to explain it, it\'s bad. - Cory House',
    'Make it work, make it right, make it fast. - Kent Beck',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler'
];

const randomQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
console.log(`%c\n"${randomQuote}"\n`, 'color: #4ecdc4; font-style: italic; font-family: monospace;');
