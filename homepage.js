// For search 
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// Book Table 
const modal = document.getElementById('bookTableModal');
const btn = document.querySelector('button');
const span = document.getElementsByClassName("close");

  function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    }

    function closeModal1() {
      modal.style.display = "none";
      alert('Your Table has been Successfully Booked !');
  } 






//Submit Response
document.addEventListener("DOMContentLoaded", () => {
  var submitButton = document.querySelector('.submit-response');

  submitButton.addEventListener("click", (e)=> {
    e.preventDefault(); 
    submitted();

    document.addEventListener("mouseover", (e)=> {
      var target = e.target;
      if (!target.classList.contains('submit-response')) {
        resetSubmit();
      }
    });
  
  function resetSubmit() {
    var response = document.querySelector('.submit-response'); 
    response.value = "Submit";
  }
  });
});

function submitted() {
  var response = document.querySelector('.submit-response'); 
  response.value = "Submitted Successfully";
}

//Dark Mode
function modeChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var icon = document.getElementById('mode-change');
  if (element.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-lightbulb");
  } else {
      icon.classList.remove("fa-lightbulb");
      icon.classList.add("fa-moon");
  }
}




