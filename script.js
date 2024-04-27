const emailInput = document.getElementById('email');
        const customerIdInput = document.getElementById('order_id');
        const submitBtn = document.getElementById('submit-btn');
        const returnForm = document.getElementById('return-form');

        returnForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your request has been sent! Check your email for further instructions.');
        });

        emailInput.addEventListener('input', function() {
            validateForm();
        });

        customerIdInput.addEventListener('input', function() {
            validateForm();
        });

        function validateForm() {
            if (emailInput.value !== '' && customerIdInput.value !== '') {
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '#007bff';
            } else {
                submitBtn.disabled = true;
                submitBtn.style.backgroundColor = '#ccc';
            }
        }
