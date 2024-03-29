document.addEventListener("DOMContentLoaded", function() {
  const menuItems = [
    { name: "Paneer Tikka Masala", price: "₹149", details: "Spicy paneer cubes cooked in a rich tomato-based gravy."},
    { name: "Frankie", price: "₹99", details: "A popular street food from India, filled with spiced veggies or meat wrapped in a thin bread."},
    { name: "Pasta", price: "₹119", details: "Classic Italian pasta tossed in a creamy sauce with your choice of toppings."},
    { name: "Pizza", price: "₹139", details: "Traditional Italian pizza with a variety of toppings on a crispy crust."},
    { name: "Tacos", price: "₹89", details: "Mexican tacos filled with your choice of meat, beans, veggies, and topped with salsa and cheese."},
    { name: "Chole Bhature", price: "₹80", details: "A popular North Indian dish featuring spicy chickpeas served with fried bread."},
    { name: "Veg Burger", price: "₹79", details: "A delicious vegetarian burger with a patty made from mixed vegetables."},
    { name: "Veg Biryani", price: "₹109", details: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices."},
  ];

  const menuContainer = document.querySelector(".container");

  function renderMenu() {
    menuItems.forEach(item => {
      const card = createMenuItem(item);
      menuContainer.appendChild(card);
    });
  }



  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const details = document.createElement("div");
    details.classList.add("details");

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: " + item.price;

    const itemDetails = document.createElement("p");
    itemDetails.textContent = item.details;

    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";
    orderButton.classList.add("button");
    orderButton.addEventListener("click", () => {
      alert("You Ordered : " + item.name);
    });

    details.appendChild(itemName);
    details.appendChild(itemPrice);
    details.appendChild(itemDetails);
    card.appendChild(details);
    card.appendChild(orderButton);
    menuContainer.appendChild(card);
  });
});
