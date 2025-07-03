import React from "react";
import Greeting from "./Greeting";

const App = ()=>{
    return(
        <div>
            <img src = "https://mimo.app/i/earth.png"/>
<Greeting name = "Adam" location = "Eden" age = {69}/>
        </div>
    );
};
export default App;