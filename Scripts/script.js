

//navber open start
const showMenu = document.getElementById("show-menu");
const responsiveNavber = document.querySelector(".res-navber");
const removeMenu = document.getElementById("remove-menu");
showMenu.addEventListener("click", () => {
  responsiveNavber.classList.add("show");
});
removeMenu.addEventListener("click", () => {
  responsiveNavber.classList.remove("show");
});
//navber open end

//card open start
const webDesignBtn = document.getElementById("web-design-btn");
const webDesignContainer = document.getElementById("web-design");
const closeModal = document.getElementById("close-modal");

webDesignBtn.addEventListener("click", () => {
  webDesignContainer.style.display = "block";
  setTimeout(() => {
    webDesignContainer.classList.add("show-modal");
  }, 100);
});
closeModal.addEventListener("click", () => {
  setTimeout(() => {
    webDesignContainer.style.display = "none";
    webDesignContainer.classList.remove("show-modal");
  }, 100);
});
const webDevBtn = document.getElementById("web-dev-btn");
const webDevContainer = document.getElementById("web-dev");
const closeModalDev = document.getElementById("close-modal-dev");

webDevBtn.addEventListener("click", () => {
  webDevContainer.style.display = "block";
  setTimeout(() => {
    webDevContainer.classList.add("show-modal");
  }, 100);
});
closeModalDev.addEventListener("click", () => {
  setTimeout(() => {
    webDevContainer.style.display = "none";
    webDevContainer.classList.remove("show-modal");
  }, 100);
});
//card open end



//random color for card section start//
function RandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function changeCardBg() {
  const color1 = RandomColor();
  const color2 = RandomColor();
  const readCard1 = document.querySelector(".card-1");
  const readCard2 = document.querySelector(".card-2");

  readCard1.style.background = `linear-gradient(45deg , ${color1} 0%, ${color2} 100%)`;
  readCard2.style.background = `linear-gradient(45deg , ${color1} 0%, ${color2} 100%)`;
}

changeCardBg();
// setInterval(changeCardBg,3000)
//random color for card section start//

//random color modal bg start
function RandomColorModel() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function changeModalBg() {
  const color1 = RandomColorModel();
  const color2 = RandomColorModel();
  const modalbg = document.getElementById("model-bg");

  modalbg.style.background = `linear-gradient(45deg , ${color1} 0%, ${color2} 100%)`;
}

changeModalBg();
setInterval(changeModalBg,3000)
//random color for modal bg end

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.getElementById("currentYear").textContent = new Date().getFullYear();



function updateDateTime() {
  const dateElement = document.getElementById("date");
  const clockElement = document.getElementById("clock");

  const now = new Date();

  // Format the date (e.g., January 4, 2025)
  const options = { weekday: 'long',  month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);

  // Format the time (HH:MM:SS)
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Update the DOM
  dateElement.textContent = formattedDate;
  clockElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize the date and time
updateDateTime();

