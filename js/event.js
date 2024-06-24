document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cartCount');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentCount = parseInt(cartCountElement.textContent) || 0;
            cartCountElement.textContent = currentCount + 1; // Increment the cart count

            // Optional: Add event name to local storage or session
            // localStorage.setItem('cartItems', JSON.stringify([...JSON.parse(localStorage.getItem('cartItems') || '[]'), this.dataset.event]));
        });
    });
});