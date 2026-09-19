
export default function IngredientList({ ingredients, togglerecipeshown, recipeSection }) {
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length >= 4 && <div className="get-recipe-container">
                    <div ref={recipeSection}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={togglerecipeshown}>Get a recipe</button>
                </div>}
        </section>
    )
}