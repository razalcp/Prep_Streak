import { useEffect, useRef } from "react"

//this is an uncontrolled component, react uses useRef to access this element, react has no control
//over this element

export const Focus = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef?.current?.focus()
    }, [])

    return (
        <>
            <input type="text" className="border-2 border-blue-400 ml-6 mt-5" ref={inputRef} onChange={() => console.log(inputRef.current.value)} />
        </>
    )
}