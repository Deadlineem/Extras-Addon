let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Modal functions
function openModal() {
    document.getElementById('myModal').style.display = "block";
    document.getElementById("modal-img").src = document.getElementsByClassName("mySlides")[slideIndex-1].getElementsByTagName("img")[0].src;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
// Navigation
document.querySelectorAll('.menu-bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;

        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Autorun Sliders
// Get all slides and initialize index
var slides = document.querySelectorAll('.mySlides');
var currentSlideIndex = 0;

// Function to show the next slide
function showNextSlide() {
    // Hide the current slide
    slides[currentSlideIndex].style.display = 'none';
    
    // Increment index or reset to 0 if it reaches the last slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Show the next slide
    slides[currentSlideIndex].style.display = 'block';
}

// Call showNextSlide function every 3 seconds
setInterval(showNextSlide, 3000);

function toggleHowToUse() {
    var contentBox = document.querySelector('.how-to-use-container .content-box');
    contentBox.style.maxHeight = contentBox.style.maxHeight === '0px' ? contentBox.scrollHeight + 'px' : '0px';
}
