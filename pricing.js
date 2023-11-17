const userSlider = document.getElementById("userSlider");
const userCountOutput = document.getElementById("userCount");
const plans = document.querySelectorAll(".plan");

userSlider.addEventListener("input", highlightPlan);
userSlider.addEventListener("input", updateSliderValue);

function updateSliderValue() {
  const userCount = userSlider.value;
  userCountOutput.textContent = userCount;
}

function highlightPlan() {
  const userCount = parseInt(userSlider.value);

  plans.forEach((plan) => {
    plan.classList.remove("active");
  });

  if (userCount > 0 && userCount <= 999) {
    plans[0].classList.add("active");
  } else if (userCount >= 999 && userCount <= 4999) {
    plans[1].classList.add("active");
  } else if (userCount >= 4999 && userCount <= 7499) {
    plans[2].classList.add("active");
  }
  else if (userCount >= 7499 && userCount <= 24999) {
    plans[3].classList.add("active");
  }
}


const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const userData = new FormData();
//   userData.append("accesscode", "4CALQVW2Z8WKFA16AFI795SWY");
  userData.append("firstname", name);
  userData.append("email", email);
  userData.append("message", message);
  // console.log(userData);

  fetch("https://getform.io/f/4749c75d-1ad6-4d4a-be1f-f48e3c66b8cc",{
    method: "POST",
    body: userData,
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      const modal1 = new bootstrap.Modal(document.getElementById("PricingModal"));
      modal1.hide();
      document.getElementById("firstname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Form submitted successfully! Congrats!!");
    });
});


const dataContainer = document.getElementById("data-container");
const loadingTrigger = document.getElementById("trigger-load");
const loadingAnimation = document.getElementById("animation-load");
let page = 1;

const showLoadingAnimation = () => {
  loadingAnimation.style.display = "block";
};

const hideLoadingAnimation = () => {
  loadingAnimation.style.display = "none";
};

const createProductCard = (item) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";


  const productTitle = document.createElement("p");
  productTitle.textContent = item.title;

  productCard.appendChild(productTitle);

  return productCard;
};