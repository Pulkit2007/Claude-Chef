import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromGemini } from "./api"

export default function Main() {

    const [ingredients, setIngredients] = useState(["Pizza Sauce", "Bread", "Vegies", "cheese"])

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))



    function addIngredient(formData) {

        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])

    }

    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function getrecipe() {
        setLoading(true)
        setError("")

        try {
            const recipemd = await getRecipeFromGemini(ingredients)
            setRecipe(recipemd)
        } catch (err) {
            console.error(err)
            setError("Unable to generate a recipe.")
        } finally {
            setLoading(false)
        }
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
            {ingredients.length > 3 ? <IngredientList ingredients={ingredients} togglerecipeshown={getrecipe} /> : null}
            {loading && <p>Generating recipe...</p>}
            {error && <p>{error}</p>}
            {recipe && <ClaudeRecipe recipe={recipe} />}



        </main>
    )
}