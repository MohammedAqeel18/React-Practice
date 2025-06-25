import React from  'react';

function UserInfo(props){
  return(
    <div>
    <p>Name : {props.name} Age:{props.age} City: {props.city}</p>
    <button onClick={()=>(alert(props.message))}> click me</button>
    </div>
  )
}


export default UserInfo;
