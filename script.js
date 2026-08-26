// ===== DARK MODE TOGGLE =====
const darkToggle = document.getElementById('darkModeToggle');
const icon = darkToggle.querySelector('i');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.className = 'fas fa-sun';
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = 'white';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#66d9ff';
    }
  });
});

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ===== CONSOLE GREETING =====
console.log('🚀 Welcome to Mahesh Ghule\'s Portfolio!');
console.log('📧 ghulemahesh897@gmail.com');
console.log('💻 https://github.com/ghulemahesh2509-ops');