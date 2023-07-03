import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from 'react-toastify';

//getLocal Storage
// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   console.log("List : ", list);
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   }else{
//     list = []
//   }
//   return list;
// };
  //  ========or===
  const defaultLocal = JSON.parse(localStorage.getItem('list') || '[]')
//Local storage
const setLocalStorage = (itemsLocal) => {
  localStorage.setItem("list", JSON.stringify(itemsLocal));
};

function App() {
  // getLocalStorage();
  const [items, setItems] = useState(defaultLocal);

  const addItemsFromInput = (newItemsInpt) => {
    const newItemInputs = {
      name: newItemsInpt,
      complited: false,
      id: nanoid(),
    };
    const newItem = [...items, newItemInputs];
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success('Item Sucessfully Added')
  };

  const removeItems = (itemId) => {
    const newRemv = items.filter((item) => item.id !== itemId);
    setItems(newRemv);
    setLocalStorage(newRemv);
    toast.success('Item deleted')
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose= '1500'/>
      <Form addItemsFromInput={addItemsFromInput} />
      <Items items={items} removeItems={removeItems} />
    </section>
  );
}

export default App;
