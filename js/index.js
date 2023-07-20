// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
const whiteSauceNode = document.querySelector(".sauce")
const glutenFreeNode = document.querySelector(".crust")
const butNode = document.querySelectorAll(".btn")

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // document.querySelectorAll('.sauce-white').forEach((oneWS) => {
  //   if (state.whiteSauce) {
  //     oneWS.style.visibility = 'visible';
  //   } else {
  //     oneWS.style.visibility = 'hidden';
  //   }
  // });
      whiteSauceNode.classList.toggle("sauce-white", state.whiteSauce)
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // document.querySelectorAll('.crust-gluten-free').forEach((oneFreeGlut) => {
  //   if (state.glutenFreeCrust) {
  //     oneFreeGlut.style.visibility = 'visible';
  //   } else {
  //     oneFreeGlut.style.visibility = 'hidden';
  //   }
  // });
  glutenFreeNode.classList.toggle("crust-gluten-free", state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  butNode.forEach((button) => {
    const ingred = button.classList[1];
    button.classList.toggle("active", state[ingred]);
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceElem = document.querySelector(".panel.price ul");
  const totPriceElem = document.querySelector(".panel.price strong");
  priceElem.innerHTML = "";
  let totPrice = basePrice;

  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      const ingredName = ingredients[ingredient].name;
      const ingredPrice = ingredients[ingredient].price;
      totPrice += ingredPrice;
      const listItem = document.createElement("li");
      listItem.textContent = `$${ingredPrice} ${ingredName}`;
      priceElem.appendChild(listItem);
    }
  }
  totPriceElem.textContent = `$${totPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
