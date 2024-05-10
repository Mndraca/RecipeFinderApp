//alert("JavaScript is working");
const searchInput = document.getElementById('userInput');
const searchButton = document.getElementById('searchButton');
const recipeList = document.getElementById('userOutput');
const searchForm = document.getElementById('form');


searchButton.addEventListener('click', searchRecipes);
searchForm.addEventListener('submit', (e) =>{
   e.preventDefault();
})

const recipes = [
    {
        title: 'Pasta Carbonara',
        image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg',
        ingredients: ["Spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"],
        link: 'https://www.bonappetit.com/recipe/simple-carbonara'
    },
    {
        title: 'Chicken Breasts',
        image: 'https://cafedelites.com/wp-content/uploads/2018/12/Creamy-Garlic-Chicken-Breasts-IMAGE-54.jpg',
        ingredients: ["Chicken breast", "bell peppers", "broccoli", "soy sauce", "garlic", "ginger"],
        link: 'https://www.recipetineats.com/oven-baked-chicken-breast/'
    },
    {
        title: 'Sarma',
        image: 'https://www.thespruceeats.com/thmb/JSb_k6aJLIk70ggoUHJyPFmzP7s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/serbian-stuffed-cabbage-recipe-sarma-1136569-hero-01-e874d6a9f7d74101a4a80f7465cbcfc7.jpg',
        ingredients: ["Cabbage", "ground chuck", "rice", "onion", "ground pork", "smoked ribs"],
        link: 'https://www.thespruceeats.com/serbian-stuffed-cabbage-recipe-sarma-1136569'
    },
    {
        title: 'Gibanica',
        image: 'https://images.notquitenigella.com/images/gibanica-cheese-pie/__gibanica-cheese-pie-12.jpg',
        ingredients: ["Cheese", "milk", "oil", "", "filo pastry", "eggs"],
        link: 'https://www.notquitenigella.com/2023/05/31/gibanica-cheese-pie/'
    }
      
   
];


function searchRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        alert("Please search your favourite food");
        return;
    }

    const filteredRecipes = recipes.filter(recipe => {
       
        const titleLower = recipe.title.toLowerCase();
        if (titleLower.includes(searchTerm)) {
            return true;
        }
        
        const ingredientsLower = recipe.ingredients.map(ingredient => ingredient.toLowerCase());
        return ingredientsLower.includes(searchTerm);
    });
    displayRecipes(filteredRecipes);

   

}




function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    if (recipes.length === 0) {
        recipeList.innerHTML = 'No recipes found';
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