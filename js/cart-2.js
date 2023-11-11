const items = document.querySelectorAll('.item');
const cartItems = document.getElementById('cart-items');
let total = 0;

items.forEach(item => {
    item.querySelector('.add-to-cart').addEventListener('click', () => {
        const name = item.querySelector('h3').textContent;
        const price = parseInt(item.querySelector('p').textContent.slice(1)); // Extracting price
        const imgSrc = item.querySelector('img').src;
        const li = document.createElement('li');
        li.innerHTML = `<img src="${imgSrc}" alt="${name}"><span>${name} - $${price}</span>`;
        cartItems.appendChild(li);
        total += price;
        document.getElementById('total').textContent = total;
    });
});
