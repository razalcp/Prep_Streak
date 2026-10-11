import React from "react";

export const ButtonChild = React.memo(({ handleClick }) => {
    console.log("Child Rendered");

    return (
        <div>
            <button className="border-2 border-yellow-400" onClick={handleClick}>Increment</button>
        </div>
    )
})