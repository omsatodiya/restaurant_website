// Book Table
const modal = document.getElementById("bookTableModal");
const btn = document.querySelector("button");
const span = document.getElementsByClassName("close");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (e){
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

function closeModal1() {
  const user = document.querySelector("#usr").value;
  const phone = document.querySelector("#mbo").value;
  const email = document.querySelector("#em").value;
  const persons = document.querySelector("#no").value;
  const time = document.querySelector("#tim").value;
  const date = document.querySelector("#dat").value;

  if (user && phone && email && persons && date && time) {
    modal.style.display = "none";
    alert("Your table has been successfully booked!");
  } else {
    alert("Please complete all details!");
  }
}

//Dark Mode
function modeChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var icon = document.getElementById("mode-change");
  if (element.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-lightbulb");
  } else {
    icon.classList.remove("fa-lightbulb");
    icon.classList.add("fa-moon");
  }
}

//order now
var orderModal = document.getElementById("order");
var orderBtns = document.querySelectorAll(".orderBtn");
var closeIcon = document.querySelector(".close-order");

function openorder() {
  orderModal.style.display = "block";
}

function closeorder() {
  orderModal.style.display = "none";
}

orderBtns.forEach(function (btn) {
  btn.addEventListener("click", openorder);
});

closeIcon.onclick = closeorder;

window.onclick = function (e){
  if (e.target == orderModal){
    closeorder();
  }
};

const item = document.getElementById("itemName");
const qty = document.getElementById("quantity");
const total = document.getElementById("totalPrice");
const confirmOrder = document.getElementById("confirmOrder");

const itemPrice = {
  pizza: 139,
  burger: 79,
  tacos: 89,
  panner_masala: 149,
  frankie: 99,
  pasta: 119,
  chole_bhature: 80,
  biryani: 109,
};

item.addEventListener("change", update);
qty.addEventListener("input", update);

function update() {
  const itemName = item.value;
  const price = itemPrice[itemName];
  const quantity = qty.value;
  const totalPrice = price * quantity;

  total.value = totalPrice.toFixed(2);
}

confirmOrder.addEventListener("click", placeOrder); 

function placeOrder() {
  const form = document.getElementById("orderForm");
  const itemName = form.elements.itemName.value;
  const quantity = form.elements.quantity.value;
  const address = form.elements.address.value;
  const paymentMethod = form.elements.paymentMethod.value;

  if (itemName && quantity && address && paymentMethod) {
    showToast("Order placed successfully!", "success");
    form.reset();
    total.value = "";
    closeorder();
  } else {
    showToast("Please fill in all required fields.", "error");
  }
}

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show "+type;
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 4500);
}

//subscribe
function subscribe() {
  const sub = document.querySelector("#subInput").value;
  if (sub) {
    alert("You have successfully registered for our newsletter!");
  } else {
    alert("Please enter your email first!");
  }
}