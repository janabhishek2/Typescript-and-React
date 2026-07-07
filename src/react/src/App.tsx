import React from "react";
import Greeter from "../components/Greeter.jsx";

const num: number =1;

const func = <T,>(x: T): T => {
  return x;
};

const ans = func(3);

console.log("Hello from TS!!", num, ans);

function App(){
  return <div>
    <Greeter personName="Abhishek"/>
  </div>;
}

export default App;