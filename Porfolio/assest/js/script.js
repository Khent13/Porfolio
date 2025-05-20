const scrollLinks = document.querySelectorAll('.nav-links a');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetSelector = this.getAttribute('href');
    
    if (targetSelector.startsWith('#') && document.querySelector(targetSelector)) {
      e.preventDefault();
      const target = document.querySelector(targetSelector);
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close-modal');

contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

const buttons = document.querySelectorAll(".dynamic-button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked on ${button.textContent}`);
  });
});

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    link.style.transition = 'background-color 0.3s ease';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = 'transparent';
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    if (name.value.trim() === '') {
      alert('Please enter your name.');
      isValid = false;
    }
    if (!email.value.includes('@') || email.value.trim() === '') {
      alert('Please enter a valid email.');
      isValid = false;
    }
    if (message.value.trim() === '') {
      alert('Please enter your message.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      contactForm.reset();
      contactModal.style.display = 'none';
    }
  });
}
