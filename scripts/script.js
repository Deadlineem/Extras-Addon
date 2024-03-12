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
