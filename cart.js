function loadCart() {

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");

if (!cartContainer) {
console.error("cart-items div not found");
return;
}

cartContainer.innerHTML= "";
let total =0;

if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
 return; 
}

    cartItems.forEach((item, index) => {
        const amount =item.price* item.quantity;
        total += amount;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" width="100">
            <h3>${item.name}</h3>
            <p>Price: €${item.price}</p>

            <button onclick="decrease(${index})">-</button>
            <span> Quantity: ${item.quantity}</span>
            <button onclick="increase(${index})">+</button>

            <p>Subtotal: €${amount}</p>
    `;
    cartContainer.appendChild(div);
    });

    cartContainer.innerHTML += `<h2>Total: €${total}</h2>`;
}

function increase(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCart();
}

function decrease(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        cartItems.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCart();
}
loadCart();
