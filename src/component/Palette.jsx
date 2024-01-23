import React from "react";
import SingleColor from "./SingleColor";

const Palette = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} />;
      })}
    </section>
  );
};

export default Palette;
