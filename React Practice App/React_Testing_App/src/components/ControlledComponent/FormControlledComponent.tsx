import { useState } from "react";

const FormControlledComponent = () => {
    const [value, setValue] = useState('')

    const isValid = value.includes('@gmail.com')


    return (
        <>

            <input className='border-2 border-amber-600' type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something here..." />
            <h2>{value}</h2>
            <button type="submit" disabled={!isValid} className='border-2 border-black' onClick={() => console.log(value)
            }>Submit</button>

        </>
    )
}

export default FormControlledComponent;