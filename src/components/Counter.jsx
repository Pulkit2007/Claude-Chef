
import { useState } from "react"

export default function Counter() {

    const[IsGoingOut, setIsGoingOut] = useState(false)

    function handleclick(){
        setIsGoingOut(prev=> !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleclick}>{IsGoingOut?"Yes":"NO"}</button>
        </main>
    )
}
