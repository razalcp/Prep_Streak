import { useCallback, useState } from "react"
import { ButtonChild } from "./ButtonChild"

const Counter1 = () => {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    console.log('Parent rendered');

    return (
        <>
            <h1 className='text-amber-600'>Count: {count}</h1>
            <ButtonChild handleClick={handleClick} />

        </>
    )
}
export default Counter1