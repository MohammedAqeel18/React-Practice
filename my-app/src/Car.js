import React from "react";
import { useState } from "react";

function Car(props){

 const [car, setCar]= useState(false)   

return(
    <div>

     <button onClick={()=> setCar(!car)}> {car? 'Hide show car brands' :'show car brands'}  </button>   
     {car && <h3> Name :{props.name1} ||| Brand :{props.brand1} ||| Color: {props.color1} Price:{props.price1}  </h3> }
   {car &&   <h3> Name: {props.name2}  |||    Brand: {props.brand2}      |||     Color:   {props.color2}   |||    Price:{props.price2} </h3>}
   {car &&  <h3>Name: {props.name3}   |||    Brand:  {props.brand3}   |||       Color:    {props.color3}    |||     Price: {props.price3}  </h3>
 }

     

    </div>
)

}

export default Car;