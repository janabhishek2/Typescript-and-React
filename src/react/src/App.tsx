import React, { useState } from "react";
// import Greeter from "../components/Greeter.jsx";
import ShoppingList from "../components/ShoppingList.tsx";
import type Item from '../models/Item.js';
import ShoppingListForm from "../components/ShoppingListForm.tsx";

// const items = [
//   {
//     id: 1,
//     name: "Hansaplast Band-aid",
//     quantity: 2
//   },
//   {
//     id: 2,
//     name: "Sunscreen",
//     quantity: 5,
//   }
// ]

function App(){

  const [items, setItems] = useState<Item[]>([]);

  const onAdd = (name: string, qty: number): void => {
    const prevItems = [...items];
    const newItem: Item = {
      id: prevItems.length + 1,
      name: name,
      quantity: qty
    };

    prevItems.push(newItem);
    setItems(() => prevItems);
  }
  return <div>
    <ShoppingList items={items} />
    <ShoppingListForm onAdd={onAdd}/>
  </div>;
}

export default App;