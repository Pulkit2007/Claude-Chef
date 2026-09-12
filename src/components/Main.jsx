import { useState } from "react"

export default function Main() {

    const [ingredients , setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handlesubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
        
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name= "ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}