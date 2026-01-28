// ===========================
// ORDER BUTTON POPUP
// ===========================
const orderButtons = document.querySelectorAll(".btn-order");
orderButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Thank you for choosing Maison Abigail! Your order will be processed shortly 🍽️");
  });
});

// ===========================
// SCROLL FADE-IN FOR DISHES
// ===========================
const dishes = document.querySelectorAll(".dish-card");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  dishes.forEach(dish => {
    const dishTop = dish.getBoundingClientRect().top;
    if(dishTop < triggerBottom){
      dish.classList.add("show");
    } else {
      dish.classList.remove("show");
    }
  });
});

// ===========================
// HELP CENTER MODAL
// ===========================
function openHelp() {
  document.getElementById("helpModal").style.display = "flex";
}

function closeHelp() {
  document.getElementById("helpModal").style.display = "none";
}

// ===========================
// HELP CENTER SUBMISSION
// ===========================
function submitHelp() {
  const select = document.getElementById("issueSelect");
  const custom = document.getElementById("customIssue").value.trim();
  let issue = select.value;
  
  // Use custom issue if "Other" is selected
  if(issue === "Other") issue = custom;

  if(issue) {
    alert("Thank you! We received your issue: '" + issue + "'. We’ll get back to you shortly. 📩");
    closeHelp();
    select.value = "";
    custom.value = "";
  } else {
    alert("Please select or describe your issue before sending.");
  }
}