const DecrementButton = ({decrementHandler,count}:any) => {
    return (
        <>
        
            <button disabled={count<=0} className="border-2 border-red-400 mt-2 w-2xl h-10" onClick={decrementHandler}>Dec</button>

        </>
    )
}
export default DecrementButton