const loadMeals =(search)=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));

}



const displayMeals = meals => {
    const mealsContainer  = document.getElementById('meal-container');
    mealsContainer.innerHTML=``;
    meals.forEach(meal=> {
        // console.log(meal);
        const MealDiv = document.createElement('div');
        MealDiv.classList.add('col');
        MealDiv.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title: ${meal.strMeal}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        mealsContainer.appendChild(MealDiv);

    })
    // console.log(meals);
    


}

const searchFood =()=> {
    const searcField = document.getElementById('search-field');
    const searchText = searcField.value;

    console.log('searching' , searchText)
    loadMeals(searchText);
}



const loadMealDetail = (idMeal)=> {

    // console.log('get detail of ID: ', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.meals[0]));

}

const displayMealDetails = meal=> {
    const detailsContainer = document.getElementById('detail-container');
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title ${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
    detailsContainer.appendChild(mealDiv);
}


// loadMeals('a');