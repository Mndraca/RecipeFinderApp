//alert("JavaScript is working");
const searchInput = document.getElementById('userInput');
const searchButton = document.getElementById('searchButton');
const recipeList = document.getElementById('userOutput');


searchButton.addEventListener('click', searchRecipes);

const recipes = [
    {
        title: 'Pasta Carbonara',
        image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg',
        ingredients: 'Spaghetti, eggs, bacon, Parmesan cheese, black pepper',
        link: 'https://www.bonappetit.com/recipe/simple-carbonara'
    },
    {
        title: 'Chicken Stir Fry',
        image: 'https://www.example.com/images/chicken_stir_fry.jpg',
        ingredients: 'Chicken breast, bell peppers, broccoli, soy sauce, garlic, ginger',
        link: 'https://www.example.com/recipes/chicken-stir-fry'
    },
    // Add more predefined recipes here...
];

function searchRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        displayRecipes(recipes);
        return;
    }

    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Ingredients: ${recipe.ingredients}</p>
            <p><a href="${recipe.link}" target="_blank">View Recipe</a></p>
        `;
        recipeList.appendChild(recipeItem);
    });
}

//displayRecipes(recipes); // Display all recipes initially
