const btn = document.getElementById('contact_button');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'contact_service';
        const templateID = 'contact_form';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                //alert('Sent!');
                swal(
                    'Good news',
                    'Your email has been sent!',
                    'success'
                );
                this.reset();
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });