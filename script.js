function toggleNav() {
    var nav = document.getElementById('navLinks');
    nav.classList.toggle('open');
}
/*  ACTIVE NAVBAR */

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.nav-link-custom');
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
/* CONTACT FORM VALIDATION */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        let isValid = true;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const phonePattern = /^[0-9]{10}$/;
        const fields = [name, email, phone, message];
        fields.forEach(field => {
            field.classList.remove('error-border');
            field.classList.remove('success-border');
        });
        if (name.value.trim() === '') {
            name.classList.add('error-border');
            isValid = false;
        } else {
            name.classList.add('success-border');
        }
        if (!email.value.match(emailPattern)) {
            email.classList.add('error-border');
            isValid = false;
        } else {
            email.classList.add('success-border');
        }
        if (!phone.value.match(phonePattern)) {
            phone.classList.add('error-border');
            isValid = false;
        } else {
            phone.classList.add('success-border');
        }
        if (message.value.trim() === '') {
            message.classList.add('error-border');
            isValid = false;
        } else {
            message.classList.add('success-border');
        }
        if (isValid) {
            alert('Message Sent Successfully!');
            contactForm.reset();
            fields.forEach(field => {
                field.classList.remove('success-border');
            });
        }
    });
}