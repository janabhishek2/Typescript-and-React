import React from "react";
// import Greeter from "../components/Greeter.jsx";
import ShoppingList from "../components/ShoppingList.tsx";

const items = [
  {
    id: 1,
    name: "Hansaplast Band-aid",
    quantity: 2
  },
  {
    id: 2,
    name: "Sunscreen",
    quantity: 5,
  }
]

function App(){
  return <div>
    <ShoppingList items={items} />
  </div>;
}

export default App;