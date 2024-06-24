(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Validate on submission
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

        // Real-time validation for all inputs
        const inputs = document.querySelectorAll('.needs-validation input');

        inputs.forEach(input => {
            input.addEventListener('keyup', function() {
                validateInput(input);
            });
        });
    }, false);

    // Function to validate different types of input
    function validateInput(input) {
        switch(input.type) {
            case 'email':
                validateEmail(input);
                break;
            case 'password':
                validatePassword(input);
                break;
            case 'checkbox':
                validateCheckbox(input);
                break;
            default:
                // Add more cases as needed
                break;
        }
    }

    // Specific validation for email
    function validateEmail(input) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailRegex.test(input.value)) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            input.setCustomValidity('');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            input.setCustomValidity('Invalid email address');
        }
        input.reportValidity();
    }

    // Specific validation for password (can be expanded)
    function validatePassword(input) {
        if (input.value.length >= 8) { 
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            input.setCustomValidity('');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            input.setCustomValidity('Password must be at least 8 characters long');
        }
        input.reportValidity();
    }

    // Validation for checkboxes (example for "I agree" checkboxes)
    function validateCheckbox(input) {
        if (input.checked) {
            input.classList.remove('is-invalid');
            input.setCustomValidity('');
        } else {
            input.classList.add('is-invalid');
            input.setCustomValidity('You must agree before submitting.');
        }
    }

})();