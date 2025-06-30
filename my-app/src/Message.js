import React    from "react";

function Message(props) {
return(
    <div>
    <h1> {props.Alert} </h1>    
    <button onClick={()=>alert(props.button)}>Submit</button>
    

    
    
    </div>
)

}

export default Message;