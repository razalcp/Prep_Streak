const IncrementButton=({incrementHandler}:any)=>{
    return(
        <>
           <button className='border-2 border-green-400 w-2xl h-10' onClick={incrementHandler}>Inc</button>
        </>
    )
}
export default IncrementButton;