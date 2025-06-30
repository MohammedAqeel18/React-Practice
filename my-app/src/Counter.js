import { useState } from "react";

function Counter(){
    const [count , setCount]= useState(0);
    const [show, setShow] = useState(false);

    const handleCheck =()=>{
        setCount(count+3);


    }

    return (


    <div>
     <h2>counter : {count} </h2>
     <button onClick={handleCheck}>Increase</button>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>

      {show && <p>This is a secret message!</p>}
    </div>
  );
}





  


export default Counter;