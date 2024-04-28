// JavaScript for determining logged in status and updating login/logout button
document.addEventListener("DOMContentLoaded", function() {
    // Get the login/logout button element
    let isLoggedIn = true;
    
    // Add event listener to the button
    loginLogoutBtn.addEventListener("click", function() {
        // Toggle between "Log In" and "Log Out" text
        if (isLoggedIn) {
            window.location.href = "authHome.html"; // Change "dashboard.html" to the actual URL of your destination page
                } 
            });
        });

// JavaScript for slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}