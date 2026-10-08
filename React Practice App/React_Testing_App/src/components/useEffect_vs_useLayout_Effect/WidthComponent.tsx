import { useEffect, useLayoutEffect, useState } from "react"

const WidthComponent = () => {
    const [width, setWidth] = useState(0)
    // useEffect(() => {
    //     setWidth(window.innerWidth)
    // }, [])
    useLayoutEffect(()=>{
        setWidth(window.innerWidth)
    })
    return (
        <>
            <h1>Width : {width}</h1>
        </>
    )
}

export default WidthComponent