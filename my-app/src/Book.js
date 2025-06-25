import react from 'react';


function book(props){
    return(
        <div>
        <h1>Book Name : {props.BookName} </h1>
        <h2>Year : {props.Year} </h2>
        <h3>Author : {props.Author} </h3>
        <button onClick={()=>alert(props.event)}> Buy now </button>
        </div>
    )
}

export default book;