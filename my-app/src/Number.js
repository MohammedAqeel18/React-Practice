import React from "react";
import { useState } from "react";


function Number(){
    const [number, setNumber]= useState(5);
    const [view, setView]= useState(false)

    const handleNumber=()=>{
        setNumber(number*5)
    }

    return(
        <div>
         <h5>Number : {number}</h5> 
         <button onClick={handleNumber}> Multiply</button>  
        
        
<button onClick={()=> setView(!view)} > {view? 'Hide' : 'View'} </button>
       {view&& <p> This is a secret message</p>}
       
        </div>
    
    )

}




export default Number;