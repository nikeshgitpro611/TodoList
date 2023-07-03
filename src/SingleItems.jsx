import React, { useState } from "react";

const SingleItems = ({ item, removeItems }) => {
  const [checked, setIsChecked] = useState(item.complited);
  return (
    <section className="single-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setIsChecked(!checked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: checked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItems(item.id)}>
        Delete
      </button>
    </section>
  );
};

export default SingleItems;
