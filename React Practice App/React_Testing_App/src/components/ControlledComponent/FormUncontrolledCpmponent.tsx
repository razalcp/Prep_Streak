import { useRef } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App';

const FormUncontrolledComponent = () => {
    const { user, setUser } = useContext(UserContext)
    console.log("Context provided value ------>  ", user);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(inputRef?.current?.value);

    }
    return (
        <>
            <form action={handleSubmit}>
                <input type="text" className="border-b-indigo-700 border-2" ref={inputRef} />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default FormUncontrolledComponent;