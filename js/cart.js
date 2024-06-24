document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [
        { type: 'Single Ticket', price: 100, quantity: 1 },
        { type: 'VIP Single Day Pass', price: 150, quantity: 1 },
        { type: 'One Year Pass', price: 500, quantity: 1 }
    ];

    const tbody = document.querySelector('table tbody');
    cartItems.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.type;
        row.insertCell(1).textContent = `$${item.price}`;
        const select = document.createElement('select');
        select.className = 'form-select';
        for (let i = 1; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
        select.value = item.quantity;
        row.insertCell(2).appendChild(select);
        row.insertCell(3).textContent = `$${item.price * item.quantity}`;
        row.insertCell(4).innerHTML = `<button class='btn btn-danger'>Remove</button>`;
        select.addEventListener('change', function() {
            item.quantity = parseInt(select.value);
            updateSubtotal(row, item);
        });
        row.cells[4].querySelector('button').addEventListener('click', function() {
            tbody.removeChild(row);
            updateSummary();
        });
    });

    function updateSubtotal(row, item) {
        const subtotal = item.quantity * item.price;
        row.cells[3].textContent = `$${subtotal}`;
        updateSummary();
    }

    function updateSummary() {
        let subtotal = 0;
        let taxes = 0;
        let total = 0;
        tbody.querySelectorAll('tr').forEach(row => {
            const rowSubtotal = parseFloat(row.cells[3].textContent.substring(1));
            subtotal += rowSubtotal;
        });
        taxes = subtotal * 0.09; // Assuming a 9% tax rate
        total = subtotal + taxes;
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('taxes').textContent = `$${taxes.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    updateSummary();
});
