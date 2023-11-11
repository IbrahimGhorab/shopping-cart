const items = document.querySelectorAll(".item");
const cartItems = document.getElementById("cart-items");
const cart = document.getElementById("cart");
let total = 0;

items.forEach((item) => {
  item.querySelector(".add-to-cart").addEventListener("click", () => {
    const name = item.dataset.name;
    const price = parseInt(item.dataset.price);
    const img = item.dataset.img;
    const li = document.createElement("li");

    // li.textContent = ` ${name} - ${price} L.E`;
    li.innerHTML = `<img src="${img}"/> <span>${name} - ${price}</span>`;
    cartItems.appendChild(li);
    total += price;
    document.getElementById("total").textContent = total;
    if (total !== 0) {
      cart.style.display = "block";
    }
  });
});
