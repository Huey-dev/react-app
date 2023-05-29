import { useState } from "react"
export default function Counter() {
    const [count, setCount] = useState(0)
    const inrementFunc = () =>{
        setCount(count + 1)
    }
    const decrementFunc = () => {
        if (count > 0)
        setCount(count - 1)
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={inrementFunc}>Increment</button>
            <button onClick={decrementFunc}>Decrement</button>

        </div>
    )
}
