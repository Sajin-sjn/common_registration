function validateName() {
    var nameInput = document.getElementById('name');
    // Pattern to allow only letters and spaces
    var namePattern = /^[A-Za-z\s]+$/;

    // Check if the input matches the pattern and meets length requirements
    if (!namePattern.test(nameInput.value) || nameInput.value.length < 2 || nameInput.value.length > 50) {
        nameInput.setCustomValidity('Name must contain only letters and spaces, and be between 2 and 50 characters long.');
    } else {
        nameInput.setCustomValidity('');
    }
}
function validatePlace() {
    var placeInput = document.getElementById('place');
    var placePattern = /^[A-Za-z\s]+$/;

    if (!placePattern.test(placeInput.value) || placeInput.value.length < 2 || placeInput.value.length > 50) {
        placeInput.setCustomValidity('Place must contain only letters and spaces, and be between 2 and 50 characters long.');
    } else {
        placeInput.setCustomValidity('');
    }
}
function validatePhone() {
    var phoneInput = document.getElementById('phone');
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit phone number.');
    } else {
        phoneInput.setCustomValidity('');
    }
}
function validateEmail() {
        var emailInput = document.getElementById('email');
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    }

    function validateLicense() {
        var licenseInput = document.getElementById('license');
        var licensePattern = /^[0-9]{6,10}$/;

        if (!licensePattern.test(licenseInput.value)) {
            licenseInput.setCustomValidity('Please enter a valid license number (6-10 alphanumeric characters).');
        } else {
            licenseInput.setCustomValidity('');
        }
    }

    function validateUsername() {
        var usernameInput = document.getElementById('username');
        if (usernameInput.value.length < 4 || usernameInput.value.length > 20) {
            usernameInput.setCustomValidity('Username must be between 4 and 20 characters.');
        } else {
            usernameInput.setCustomValidity('');
        }
    }

    function validatePassword() {
        var passwordInput = document.getElementById('password');
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(passwordInput.value)) {
            passwordInput.setCustomValidity('Password must be at least 8 characters long and contain both letters and numbers.');
        } else {
            passwordInput.setCustomValidity('');
        }
    }

    function togglePassword() {
        var passwordInput = document.getElementById('password');
        var toggleIcon = document.getElementById('togglePassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        }
    }
// function validateForm() {
//     var agree = document.getElementById('agree');
//     if (!agree.checked) {
//         alert('You must agree to the terms and conditions before submitting.');
//         return false;
//     }
//     return true;
// }