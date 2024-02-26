
const apiKey = "6359aad28c4f4c4b9c6b716e6a424c9e";

const recipesListEl = document.querySelector("#recipes_list");

const getRecipes = async () => {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`);

    const data = await response.json();

    console.log(data);

    return data.recipes;
}

const displayRecipes = (recipes) => {
    recipesListEl.innerHTML = "";

    recipes.forEach((recipe) => {
        const liEl = document.createElement("li");
        recipesListEl.appendChild(liEl);

        const imgEl = document.createElement("img");
        imgEl.src = recipe.image;
        imgEl.alt = "Recipes Images";
        liEl.appendChild(imgEl);

        const h2El = document.createElement("h2");
        h2El.innerText = recipe.title;
        liEl.appendChild(h2El);

        const pEl = document.createElement("p");
        pEl.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;
        liEl.appendChild(pEl);

        const aEl = document.createElement("a");
        aEl.href = recipe.sourceUrl;
        aEl.target = "_blank";
        aEl.innerText = "View Page";
        liEl.appendChild(aEl);
    })
}

const init = async () => {
    const recipes = await getRecipes();
    
    displayRecipes(recipes);
}
init();