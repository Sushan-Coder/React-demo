import React from "react";
const Article = ()=>{
  return(
    <div>
      <h2>Bank Heist</h2>
      <p>A local bank was hit by unidentified suspects.</p>
    </div>

  );
};
const App = ()=>{
  return(
    <div>
      <h1>Independent News</h1>
      <Article/>
    </div>
  );
};
export default App;