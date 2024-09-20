let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert('Item added to cart!');
    });
});
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const homeSection = document.querySelector('#home');
    const homePosition = homeSection.getBoundingClientRect();

    if (homePosition.top < window.innerHeight && homePosition.bottom >= 0) {
        logo.style.display = 'block';  // Show logo on the home section
    } else {
        logo.style.display = 'none';  // Hide logo outside home section
    }
});
// Toggling between login and signup forms
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginToggle.addEventListener('click', function() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
});

signupToggle.addEventListener('click', function() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
});

// Optional: Add event listeners for the "Sign up here" and "Login here" links
document.getElementById('go-to-signup').addEventListener('click', function(e) {
    e.preventDefault();
    signupToggle.click();
});

document.getElementById('go-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    loginToggle.click();
});
