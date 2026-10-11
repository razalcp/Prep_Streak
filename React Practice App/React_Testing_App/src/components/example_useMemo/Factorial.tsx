import { useMemo, useState } from "react"

export const Factorial = () => {
    const [text, setText] = useState('')
    const [count, setCount] = useState(1)

    function computeFactorial(num: number): number {
        console.log('Calculating Factorial');

        if (num <= 1) return 1
        return num * computeFactorial(num - 1)
    }

    // const factorial = computeFactorial(count)
    const factorial = useMemo(() => {
        return computeFactorial(count)

    }, [count])

    return (
        <>
            <div className="border-4 border-lime-600 w-2xl">
                <h1>The factorial of {count} is {factorial}</h1>
                <button className="border-2 border-b-fuchsia-700 " onClick={() => setCount(prev => prev + 1)}>Increment</button>
            </div>

            <div className="mt-20 border-4 border-red-700 w-2xl">

                <input type="text" placeholder="Type something here ..." onChange={(e) => setText(e.target.value)} className="border-2 border-amber-600" />
                <h1>{text}</h1>
            </div>
        </>
    )
}