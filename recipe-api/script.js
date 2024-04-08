let btn = document.getElementById("btn");
let recipeAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

btn.addEventListener("click", () => {
  let userInp = document.getElementById("userInput").value;
  // console.log(userInp);

  if (userInp.length == 0) {
    result.innerHTML = `<h4 class="text-2xl text-gray-800 font-bold text-center my-8">Input Field Can Not Be Empty</h4>`;
  } else {
    fetch(recipeAPI + userInp)
      .then((data) => data.json())
      .then((item) => {
        console.log(item);

        let recipe = item.meals[0];

        // console.log(recipe);
        // console.log(recipe.strMeal);
        // console.log(recipe.strArea);
        // console.log(recipe.strMealThumb);
        // console.log(recipe.strCategory)
        // console.log(recipe.strInstructions);
        // console.log(recipe.strTags)

        let count = 1;
        let ingredients = [];

        for (let i in recipe) {
          let ingredient = "";
          let measure = "";

          if (i.startsWith("strIngredient") && recipe[i]) {
            ingredient = recipe[i];
            measure = recipe[`strMeasure` + count];
            count += 1;

            // console.log(ingredient, measure);
            ingredients.push(`${ingredient}, ${measure}`);
          }
        }
        console.log(ingredients);

        let result = document.getElementById("result");
        result.innerHTML = `
        <img src='${recipe.strMealThumb}' class="rounded-lg mx-auto h-[50vh] my-6" alt="">
        <div class="flex flex-col bg-orange-400 rounded-lg py-4">
        <h1 class="text-gray-900 font-extrabold text-3xl text-center mt-4">" ${recipe.strMeal} "</h1>
        <h1 class="text-gray-800 font-extrabold text-xl text-center">${recipe.strArea}</h1>
        </div>
        <button id="recipeBtn" class="text-lg font-bold bg-orange-500 block sm:ml-auto rounded-[0.6rem] p-4 my-6 sm:mx-10">View Recipe</button>
        `;
        
        let details = document.getElementById("details");
        let recipeBtn = document.getElementById("recipeBtn");
        recipeBtn.addEventListener("click", () => {
          details.classList.remove("hidden");
        });

        let instructions = document.getElementById("instructions");
        let category = document.getElementById("category");
        let tags = document.getElementById("tags");

        instructions.innerText = `${recipe.strInstructions}`;
        category.innerText = `${recipe.strCategory}`;
        tags.innerText = `${recipe.strTags}`;

        let closeBtn = document.getElementById("close");
        closeBtn.addEventListener("click", () => {
          details.classList.add("hidden");
        });

        let parent = document.createElement("ul");
        parent.classList.add(`ul-list`);
        console.log(parent);

        ingredients.forEach((i) => {
          let child = document.createElement("li");
          const liList = ["text-gray-500", "text-lg", "font-semibold", "text-justify"];
          child.classList.add(...liList);

          child.innerText = i;
          parent.appendChild(child);
        });

        let detailContainer = document.getElementById("detailContainer");
        detailContainer.innerHTML = '';
        detailContainer.append(parent);
      })
      .catch(() => {
        result.innerHTML = `<h4 class="text-2xl text-gray-800 font-bold text-center my-8">Invalid Input</h4>`;
      });
  }
});
