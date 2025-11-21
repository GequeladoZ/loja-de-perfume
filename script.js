let cartCount = 0;
let cartTotal = 0;


function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal.toFixed(2);
}


document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const price = parseFloat(btn.dataset.price);

        cartCount++;
        cartTotal += price;

        updateCart();
    });
});


document.getElementById("clear-cart").addEventListener("click", () => {
    cartCount = 0;
    cartTotal = 0;
    updateCart();
});


document.getElementById("checkout").addEventListener("click", () => {
    if (cartCount === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    document.getElementById("modal").style.display = "flex";
    document.getElementById("checkout-total").textContent = cartTotal.toFixed(2);
});


document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});
