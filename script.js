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
