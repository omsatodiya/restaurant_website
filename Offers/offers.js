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

