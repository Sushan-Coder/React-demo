import React from "react";
const Greeting = (props)=>{
    return(<div> <h1>Hi, {props.name}!</h1>
    <p>you're from {props.location}.</p>
    </div>);
};
export default Greeting;