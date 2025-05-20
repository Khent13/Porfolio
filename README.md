Khent C. Fillone 4F-COMPE WEBDEV

This is my explanation of each fucntion on the JS code 

1. Smooth Scroll
const scrollLinks = document.querySelectorAll('.nav-links a');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
Purpose: When clicking navigation links, the page smoothly scrolls to the target section instead of jumping abruptly.

How: Listens for clicks on nav links, cancels default jump, then animates scroll to the section accounting for fixed header height.

2. Contact Modal Logic
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
Purpose: Controls showing and hiding the Contact Us modal popup.

How: Clicking the Contact button opens the modal, clicking the close icon or outside the modal closes it.

3. Dynamic Button Actions

const buttons = document.querySelectorAll(".dynamic-button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked on ${button.textContent}`);
  });
});
Purpose: Adds interactive feedback on buttons with the .dynamic-button class.

How: Shows an alert message mentioning the button text when clicked (could be customized or removed later).

4. Enhanced Hover Effect on Nav Links
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
Purpose: Improves the visual effect when hovering over navigation links.

How: Changes the background color smoothly on mouse enter and resets on mouse leave.

5. Form Validation

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
