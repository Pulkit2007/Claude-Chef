import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"

export default function Main() {

    const [ingredients, setIngredients] = useState(["Pizza Sauce", "Bread", "Vegies", "cheese"])

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {

        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])

    }

    const [recipeshown, setrecipeshown] = useState(false)

    function togglerecipeshown(){
        setrecipeshown(prev=> !prev)
    }


    return (
        <main>
            {/* // using form actions to add ingredients to array & then rendering the array. */}
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 3 ? <IngredientList ingredients={ingredients} togglerecipeshown={togglerecipeshown} /> : null}
            {recipeshown && <ClaudeRecipe/>}
            


        </main>
    )
}