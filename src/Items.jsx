import React from "react";
import SingleItems from "./SingleItems";

const Items = ({ items, removeItems }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItems key={item.id} item={item} removeItems={removeItems} />
        );
      })}
    </section>
  );
};

export default Items;
