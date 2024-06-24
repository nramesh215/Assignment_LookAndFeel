document.addEventListener('DOMContentLoaded', function() {
    const cartCountElement = document.getElementById('cartCount');
    
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.closest('.input-group').querySelector('.quantity');
            let currentValue = parseInt(input.value);
            input.value = currentValue + 1;
            cartCountElement.textContent = parseInt(cartCountElement.textContent) + 1;
        });
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.closest('.input-group').querySelector('.quantity');
            let currentValue = parseInt(input.value);
            if (currentValue > 0) {
                input.value = currentValue - 1;
                cartCountElement.textContent = parseInt(cartCountElement.textContent) - 1;
            }
        });
    });
});