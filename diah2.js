const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const product = this.parentElement;
        const productName = product.getAttribute("data-name");
        const productPrice = parseInt(product.getAttribute("data-price"));

        // Tambahkan item ke keranjang
        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - Rp ${productPrice}`;
        cartItems.appendChild(listItem);

        // Update total harga
        totalPrice += productPrice;
        totalPriceElement.textContent = `Total: Rp ${totalPrice}`;
    });
});