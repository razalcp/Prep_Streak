
import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('useEffect Worked');

        const interval = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div>Count : {count}</div>
        </>
    )
}

export default Counter;