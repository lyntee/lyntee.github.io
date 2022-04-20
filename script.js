// Getting related elements from HTML

// Responsive side menu (toggling)
const sideMenuBtn = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side-menu");

// Slideshow images
const slider = document.querySelectorAll(".slider-content");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Newsletter email valiation
const email = document.querySelector("#email");
const form = document.querySelector(".inputs");
const newsletter = document.querySelector(".newsletter");

// Dynamic cards
const pdtImagesDiv = document.querySelectorAll(".pdt-div");
const descDiv = document.querySelectorAll(".pdt-desc");
const reviewsDiv = document.querySelectorAll(".reviews-desc");
const modalWindow = document.querySelector(".modal");
const pdtImages = [
  {
    src: "./photos/p1-bedroom.jpg",
    alt: "p1-bedroom"
  },
  {
    src: "./photos/p2-kitchen.jpg",
    alt: "p2-kitchen"
  },
  {
    src: "./photos/p3-livingroom.jpg",
    alt: "p3-livingroom"
  }
];
const pdtDesc = [
  {
    h3: "Bedroom",
    p: "bedroom description Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ab? Quo sunt id eos ut pariatur quas, unde placeat deleniti recusandae iusto ipsa harum, similique, magni tenetur facilis nesciunt",
    button: "Learn More"
  },
  {
    h3: "Kitchen",
    p: "kitchen description Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ab? Quo sunt id eos ut pariatur quas, unde placeat deleniti recusandae iusto ipsa harum, similique, magni tenetur facilis nesciunt",
    button: "Learn More"
  },
  {
    h3: "Living Room",
    p: "living room description Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ab? Quo sunt id eos ut pariatur quas, unde placeat deleniti recusandae iusto ipsa harum, similique, magni tenetur facilis nesciunt",
    button: "Learn More"
  }
];
const reviewsDesc = [
  {
    name: "Emily C.",
    designation: "Housewife, Mother of three",
    description: "review 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sapiente magni quo nihil deserunt optio possimus voluptas incidunt sunt ducimus! Rerum in sit vero id quod, sequi culpa adipisci totam! Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Adam T.",
    designation: "Operation Manager",
    description: "review 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sapiente magni quo nihil deserunt optio possimus voluptas incidunt sunt ducimus! Rerum in sit vero id quod, sequi culpa adipisci totam! Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Thomas W.",
    designation: "Entrepreneur",
    description: "review 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sapiente magni quo nihil deserunt optio possimus voluptas incidunt sunt ducimus! Rerum in sit vero id quod, sequi culpa adipisci totam! Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];
const modalContent = {
  headings: "Title",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sapiente magni quo nihil deserunt optio possimus voluptas incidunt sunt ducimus! Rerum in sit vero id quod, sequi culpa adipisci totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  span: ""
};

pdtImages.forEach((value, index) => {
  const image = document.createElement("img");
  image.src = value.src;
  image.alt = value.alt;
  pdtImagesDiv[index].insertBefore(image, pdtImagesDiv[index].fistElementChild);
});

pdtDesc.forEach((value, index) => {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const button = document.createElement("button");
  h3.textContent = value.h3;
  p.textContent = value.p;
  button.textContent = value.button;
  h3.classList.add("headings");
  p.classList.add("desc");
  button.classList.add("btn");
  descDiv[index].appendChild(h3);
  descDiv[index].appendChild(p);
  descDiv[index].appendChild(button);
});

reviewsDesc.forEach((value, index) => {
  const span = document.createElement("span");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  span.classList.add("fas", "fa-user", "fa-2x");
  p1.textContent = value.name;
  p2.textContent = value.designation;
  p3.textContent = value.description;
  p1.classList.add("name");
  p2.classList.add("name");
  p3.classList.add("desc");
  reviewsDiv[index].appendChild(span);
  reviewsDiv[index].appendChild(p1);
  reviewsDiv[index].appendChild(p2);
  reviewsDiv[index].appendChild(p3);
});

// Event Listeners
sideMenuBtn.addEventListener("click", displaySideMenu);
prev.addEventListener("click", showPrevImg);
next.addEventListener("click", showNextImg);
form.addEventListener("submit", checkEmailAddress);
descDiv.forEach((value, index) => {
  descDiv[index].lastElementChild.addEventListener("click", showModal);
});

// Functions that runs upon event evoked
function displaySideMenu() {
  sideMenu.classList.toggle("show");
}

function showPrevImg() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slider[slider.length - 1].classList.add("current");
  }
}

function showNextImg() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slider[0].classList.add("current");
  }
}

function checkEmailAddress(e) {
  e.preventDefault();
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorMsg = document.createElement("small");
  errorMsg.style.color = "red";
  errorMsg.style.display = "block";
  if (email.value === "") {
    errorMsg.textContent = "Please enter email address before clicking sign up button";
    newsletter.appendChild(errorMsg);
  } else if (!email.value.match(mailFormat)) {
    while (newsletter.lastElementChild !== form) {
      newsletter.removeChild(newsletter.lastElementChild);
    }
    errorMsg.textContent = "Invalid email address";
    newsletter.appendChild(errorMsg);
  } else {
    while (newsletter.lastElementChild !== form) {
      newsletter.removeChild(newsletter.lastElementChild);
    }
    form.reset();
    alert("Thank you for signing up!");
  }
}

function showModal() {
  const modalDiv = document.createElement("div");
  const modalDivContent = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const close = document.createElement("span");
  modalDiv.classList.add("arranger");
  h3.textContent = modalContent.headings;
  p.textContent = modalContent.description;
  close.classList.add("fas", "fa-window-close");
  modalWindow.classList.add("modal-bg");
  modalDivContent.appendChild(h3);
  modalDivContent.appendChild(p);
  modalDiv.appendChild(modalDivContent);
  modalDiv.appendChild(close);
  modalWindow.appendChild(modalDiv);
  close.addEventListener("click", closeModal);
}

function closeModal() {
  while (modalWindow.firstElementChild) {
    modalWindow.removeChild(modalWindow.firstElementChild);
    modalWindow.classList.remove("modal-bg");
  }
}