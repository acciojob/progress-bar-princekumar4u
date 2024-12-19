//your JS code here. If required.
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActiveIndex = 0;

// Function to update button states
function updateButtonStates() {
    if (currentActiveIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    
    if (currentActiveIndex === circles.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Function to move to the next circle
function next() {
    if (currentActiveIndex < circles.length - 1) {
        circles[currentActiveIndex].classList.remove('active');
        currentActiveIndex++;
        circles[currentActiveIndex].classList.add('active');
        updateButtonStates();
    }
}

// Function to move to the previous circle
function prev() {
    if (currentActiveIndex > 0) {
        circles[currentActiveIndex].classList.remove('active');
        currentActiveIndex--;
        circles[currentActiveIndex].classList.add('active');
        updateButtonStates();
    }
}

// Event listeners for buttons
nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);

// Initial button state setup
updateButtonStates();
