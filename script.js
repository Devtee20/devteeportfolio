let contactForm = document.getElementById('contact-form');
let contactMessage = document.getElementById('contactMessage')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_kc236p6', 'template_ilj7wwy', '#contact-form', '5H48LgQ4zG939dm6Z')
    .then(()=>{
        contactMessage.textContent = `Message sent successfully ✅`;

        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset();
    })
    .catch((error)=>{
        contactMessage.textContent = `Message not sent ❌, please try again.`
    })
})