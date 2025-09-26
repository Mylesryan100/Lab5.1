
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const cartCountSpan = document.getElementById('cart-count');

let totalPrice = 0;

console.log("✅ script.js is running");

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
  console.log("💰 Total updated:", totalPrice.toFixed(2));
}

function updateCartCount() {
  let totalQuantity = 0;
  const quantitySpans = cart.querySelectorAll(".quantity");
  quantitySpans.forEach(span => {
    totalQuantity += parseInt(span.textContent);
  });

  cartCountSpan.textContent = totalQuantity;
  console.log(" Cart total quantity:", totalQuantity);
}

addProductButton.addEventListener("click", () => {
  console.log("🛒 Add Product button clicked!");

  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    console.log("⚠️ Invalid input");
    alert("Please enter a valid product name and price.");
    return;
  }

  const li = document.createElement('li');
  li.classList.add('cart-item');
  li.dataset.price = price;

  li.innerHTML = `
    <span>${name} - $${price.toFixed(2)}</span>
    <button class="decrease">-</button>
    <span class="quantity">1</span>
    <button class="increase">+</button>
    <button class="remove">Remove</button>
  `;

  cart.appendChild(li);
  updateTotalPrice(price);
  updateCartCount();

  console.log("✅ Product added:", name, "Price:", price);

  productNameInput.value = '';
  productPriceInput.value = '';
});

cart.addEventListener("click", (event) => {
  const button = event.target;
  const item = button.closest("li");

  if (!item) return; 
  
  const price = parseFloat(item.dataset.price);
  const quantitySpan = item.querySelector(".quantity");
  let quantity = parseInt(quantitySpan.textContent);

  if (button.classList.contains("remove")) {
    updateTotalPrice(-(price * quantity));
    item.remove();
    updateCartCount();
    console.log("❌ Item removed:", item.textContent.trim());
  }

  if (button.classList.contains("increase")) {
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotalPrice(price);
    updateCartCount();
    console.log("🔼 Quantity increased to:", quantity);
  }

  if (button.classList.contains("decrease") && quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updateTotalPrice(-price);
    updateCartCount();
    console.log("🔽 Quantity decreased to:", quantity);
  }
});