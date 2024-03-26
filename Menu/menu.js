document.addEventListener("DOMContentLoaded", function() {
  const menuItems = [
    { name: "Paneer Tikka Masala", price: "₹500", details: "Spicy paneer cubes cooked in a rich tomato-based gravy.", image: "paneer-tikka-masala-.webp" },
    { name: "Frankie", price: "₹400", details: "A popular street food from India, filled with spiced veggies or meat wrapped in a thin bread.", image: "frankie.jpg" },
    { name: "Pasta", price: "₹600", details: "Classic Italian pasta tossed in a creamy sauce with your choice of toppings.", image: "pasta-.jpg" },
    { name: "Pizza", price: "₹500", details: "Traditional Italian pizza with a variety of toppings on a crispy crust.", image: "pizza.jpg" },
    { name: "Tacos", price: "₹450", details: "Mexican tacos filled with your choice of meat, beans, veggies, and topped with salsa and cheese.", image: "hero_image.jpg" },
    { name: "Chole Bhature", price: "₹400", details: "A popular North Indian dish featuring spicy chickpeas served with fried bread.", image: "chole-bhature.cms" },
    { name: "Veg Burger", price: "₹350", details: "A delicious vegetarian burger with a patty made from mixed vegetables.", image: "veggie-burger.avif" },
    { name: "Veg Biryani", price: "₹550", details: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.", image: "veg-biryani.jpg" },,
  ];

  const menuContainer = document.querySelector(".container");
  const cartContainer = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");

  let cartItems = [];

  function renderMenu() {
    menuItems.forEach(item => {
      const card = createMenuItem(item);
      menuContainer.appendChild(card);
    });
  }



  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    // // Create image element and set its source
    // const img = new Image();
    // img.src = item.image;
    // img.alt = item.name;
    // img.classList.add("background-img");

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
    // card.appendChild(img); // Append image element
    card.appendChild(details);
    card.appendChild(orderButton);
    menuContainer.appendChild(card);
  });
});
