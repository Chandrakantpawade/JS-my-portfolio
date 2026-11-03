
const themeToggleBtn = document.getElementById('theme-toggle'); 

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Dynamic content update using DOM manipulation
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });
}

const changeTextBtn = document.getElementById('change-text-btn');
const dynamicHeading = document.getElementById('dynamic-heading');

if (changeTextBtn && dynamicHeading) {
    changeTextBtn.addEventListener('click', function() {
        // Calling a reusable function
        updateElementText(dynamicHeading, 'Thank you for exploring my portfolio!');
    });
}

// Reusable function to update content
function updateElementText(element, newText) {
    element.textContent = newText;
}

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorDiv = document.getElementById('error-message'); 

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let errors = [];

        // Check if name is empty
        if (nameInput && nameInput.value.trim() === '') {
            errors.push('Name is required.');
        }

        // Check if email is empty or invalid
        if (emailInput && emailInput.value.trim() === '') {
            errors.push('Email is required.');
        } else if (!validateEmail(emailInput.value)) {
            errors.push('Please enter a valid email address.');
        }

        // Check if message is empty
        if (messageInput && messageInput.value.trim() === '') {
            errors.push('Message cannot be blank.');
        }

        // If there are errors, prevent form submission and show errors
        if (errors.length > 0) {
            event.preventDefault(); // Stop form from submitting
            if (errorDiv) {
                errorDiv.innerHTML = errors.join('<br>');
                errorDiv.style.color = 'red';
            } else {
                alert(errors.join('\n'));
            }
        } else {
            // Success case
            alert('Form submitted successfully!');
        }
    });
}

// Reusable function for email validation format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}