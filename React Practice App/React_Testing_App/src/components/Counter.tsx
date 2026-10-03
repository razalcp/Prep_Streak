import { useState } from "react"
import IncrementButton from "./IncrementButton"
import DecrementButton from "./DecrementButton"
import FruitsList from "./FruitsList"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [checked, setChecked] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    };
    const handleDecrement = () => {
        // if (count === 0) {
        // alert("Cant decrement beyond 0")
        // return
        // }
        setCount(prev => prev - 1)
    }
    return (
        <>
            <h1 className="text-4xl text-pink-600 ml-[460px]">Prayer Counter</h1>
            <div className="border-blue-600 border-4 h-40 w-3xl ml-[250px] mt-[200px] items-center flex flex-col items-center justify-center">
                <h1 className='text-amber-600'>{count}</h1>

                //toggle checkbox
                <input type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)} />
                <button onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? "★" : "☆"}</button>

                <IncrementButton incrementHandler={handleIncrement} />
                <DecrementButton decrementHandler={handleDecrement} count={count} />

            </div>

            {/* <FruitsList/> */}

        </>
    )
}

export default Counter