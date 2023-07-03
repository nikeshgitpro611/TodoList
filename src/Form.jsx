import React, { useState } from "react";
import {  toast } from 'react-toastify';
const Form = ({ addItemsFromInput }) => {
  const [newItem, setNewitem] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error('Please provide input Value')
      return};
    //add item to the list here using props method and reset input field after adding it
    addItemsFromInput(newItem);
    setNewitem("");
  };
  return (
    <section>
      <form onSubmit={handelSubmit} >
        <h4>Grocery List</h4>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={newItem}
            onChange={(e) => setNewitem(e.target.value)}
            placeholder="Enter Text Here ..."
          />
          <button className="btn">Add items</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
