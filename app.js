
/* Mobil meny */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");

});


/* Recept array */
const recipes = [
  {
    title: "Vardagskyckling med vitlök",
    category: "kyckling",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
    description: "En snabb och smakrik middag på 20 minuter.",
    instructions: [
      "Stek kycklingen i en panna.",
      "Tillsätt vitlök och matlagningsgrädde.",
      "Låt allt puttra tills kycklingen är genomstekt."
    ]
  },
  {
    title: "Pasta Carbonara",
    category: "kott",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    description: "En klassisk italiensk pastarätt.",
    instructions: [
      "Koka pastan i saltat vatten.",
      "Stek guanciale tills den blir knaprig.",
      "Blanda äggulor med riven ost.",
      "Blanda ihop allt med lite pastavatten."
    ]
  },
  {
    title: "Beef Wellington",
    category: "kott",
    image: "https://images.unsplash.com/photo-1675718341348-65224936b742",
    description: "Oxfilé inbakad i smördeg.",
    instructions: [
      "Bryn köttet i en panna.",
      "Stek svampen tills vätskan försvinner.",
      "Linda in köttet med svamp och smördeg.",
      "Grädda tills smördegen blir gyllene."
    ]
  }
];


/* Visa recepten */
const recipeGrid = document.getElementById("recipe-grid");

function showRecipes(list) {
  recipeGrid.innerHTML = "";

  if (list.length === 0) {
    recipeGrid.textContent = "Inga recept hittades.";
    return;
  }

  list.forEach(function (recipe) {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    img.className = "recipe-img";

    const content = document.createElement("div");
    content.className = "recipe-content";

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const description = document.createElement("p");
    description.textContent = recipe.description;

    content.appendChild(title);
    content.appendChild(description);

    card.appendChild(img);
    card.appendChild(content);

    card.addEventListener("click", function () {
      openRecipe(recipe);
    });

    recipeGrid.appendChild(card);
  });
}


/* Recept popup */
const recipeModal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalInstructions =
  document.getElementById("modal-instructions");

function openRecipe(recipe) {
  modalTitle.textContent = recipe.title;
  modalDesc.textContent = recipe.description;
  modalInstructions.innerHTML = "";

  recipe.instructions.forEach(function (step) {
    const item = document.createElement("li");
    item.textContent = step;
    modalInstructions.appendChild(item);
  });

  recipeModal.style.display = "flex";
}

function closeRecipe() {
  recipeModal.style.display = "none";
}

document.getElementById("modal-close").addEventListener(
  "click",
  closeRecipe
);

recipeModal.addEventListener("click", function (event) {
  if (event.target === recipeModal) {
    closeRecipe();
  }
});


/* Sök och kategori */
const searchInput = document.getElementById("recipe-search");
const filterButtons = document.querySelectorAll(".filter-btn");

function filterRecipes() {
  const search = searchInput.value.toLowerCase().trim();

  let category = "all";

  filterButtons.forEach(function (button) {
    if (button.classList.contains("active")) {
      category = button.dataset.category;
    }
  });

  const result = recipes.filter(function (recipe) {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search) ||
      recipe.category.includes(search);

    const matchesCategory =
      category === "all" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  showRecipes(result);
}

searchInput.addEventListener("input", filterRecipes);

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    filterRecipes();
  });
});


/* Om mig */
const aboutLink = document.querySelector('a[href="#om-mig"]');
const aboutModal = document.getElementById("om-mig");
const aboutClose = document.getElementById("about-modal-close");

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutModal.style.display = "flex";
});

aboutClose.addEventListener("click", function () {
  aboutModal.style.display = "none";
});


/* visa recepten när sidan laddar */
showRecipes(recipes);
