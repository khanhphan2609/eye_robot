// Get the icons inside each eye
const eyes = document.querySelectorAll('#happyEye .eye i');

// Function to change the icon
function changeIcon() {
    eyes.forEach(eye => {
        // Get the current position (right or left) from the data-attribute
        const position = eye.getAttribute('data-position');
        
        if (eye.classList.contains('fa-circle-notch')) {
            eye.classList.remove('fa-circle-notch');
            // Toggle between fa-angle-right and fa-angle-left based on the position
            if (position === 'right') {
                eye.classList.add('fa-angle-right');
            } else {
                eye.classList.add('fa-angle-left');
            }
        } else {
            eye.classList.remove('fa-angle-right', 'fa-angle-left');
            eye.classList.add('fa-circle-notch');
        }
    });
}

// Change icon every 2 seconds
setInterval(changeIcon, 3000);