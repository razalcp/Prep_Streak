import { useReducer } from "react"

export const Counter_useReducer = () => {
    const initialState = {count:0}
    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action) {
        console.log('reducer worked');

        switch (action.type) {
            case 'increment':
                console.log(state.count);
                
                return {count:state.count+1}

            case 'decrement':
                if (state.count >= 1) {
                    return {count:state.count-1}

                }
            case 'reset':
                return {count:0}
            default:
                throw new Error('No such action')

        }
    }
    return (
        <div className='h-[450px] w-[750px] border-4 border-amber-500 back bg-black items-center justify-center ml-[316px] mt-[117px]'>
            <h2 className="text-gray-500 ml-10 mt-3.5">Interactive Counter</h2>
            <div className="rounded-4xl text-white items-center justify-center ml-[300px]">
                <h1 className="text-5xl ml-[42px]">{state.count}</h1>
            </div>
            <div className="flex flex-col mt-11 ml-[200px]">
                <button className="bg-white text-black w-[300px] rounded-3xl h-[42px]" onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
                <button disabled={state.count <= 0 ? true : false} className="bg-white text-black w-[300px] rounded-3xl mt-11 h-[42px]" onClick={() => dispatch({ type: 'decrement' })}>- Decrement</button>
                <button className=" text-white border-black bg-amber-400 w-[450px] mt-11 pl-0.5 ml-[-74px] rounded-3xl h-[42px]"
                    onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>


        </div>
    )
}