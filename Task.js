// Banner slider Code

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(nextSlide, 2000);
updateSlider();


// Model Code

var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("openmodal");
var spans = document.getElementsByClassName("close");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    modals[i].style.display = "block";
  }


}
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    modals[i].style.display = "none";
  }
}


// Tabs Code

const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach(content => {
      content.style.display = "none";
    });
    tabContents[index].style.display = "block";
  });
});




tabs.forEach(button => {
  button.addEventListener('click', function () {
    tabs.forEach(btn => btn.classList.remove('active'));
    this.classList.add("active")
  });
})




// Current date code

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
document.getElementById("currentDate").innerText = currentDate
document.getElementById("currentDateOne").innerText = currentDate



console.log(currentDate); // "17-6-2022"



// Show hide sidebar code

let leftHamburger = document.getElementById("leftHamburger");
let sidebar=document.getElementById("sidebar");
leftHamburger.addEventListener('click', function () {
  var icon = document.querySelector("i");
  icon.classList.toggle('fa-close');

  var x = document.getElementById("main-wrapper-box");
  if (x.style.display === "block") {
    x.style.display = "grid";
    x.style.gridTemplateColumns="10% auto";
  } else {
    x.style.display = "block";
  }


  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
})



