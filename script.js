// Select all images in the slider and control buttons
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0; // Index to keep track of the current image in the slider

// Function to change the currently displayed slide
function changeSlide() {
    // Hide all images initially
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // Display the current image based on index 'n'
    imgs[n].style.display = 'block';
}
changeSlide(); // Call function to display the first image

// Event listener for the previous button
prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--; // Move to the previous image if not at the first image
    } else {
        n = imgs.length - 1; // Go to the last image if at the first
    }
    changeSlide(); // Update the displayed image
});

// Event listener for the next button
next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++; // Move to the next image if not at the last image
    } else {
        n = 0; // Go to the first image if at the last
    }
    changeSlide(); // Update the displayed image
});

// Horizontal scroll functionality for product containers
const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault(); // Prevents default vertical scroll
        item.scrollLeft += evt.deltaY; // Scrolls horizontally based on wheel movement
    });
}