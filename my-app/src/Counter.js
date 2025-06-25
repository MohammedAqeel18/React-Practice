import { useState } from "react";

function Counter(){
    const [count, setCount]= useState(25)

    function handleClick(){
        setCount(count*20)
    }

    return(
        <div>
            <h4>count ::: {count} </h4>
            <button onClick={handleClick}> multiply</button>
        </div>
    )
}

export default Counter;