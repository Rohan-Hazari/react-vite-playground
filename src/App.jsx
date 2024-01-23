import Form from "./component/Form";
import Palette from "./component/Palette";
import Values from "values.js";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(new Values("#ffffff").all(10));

  const addColor = (color) => {
    const newColors = new Values(color).all(10);
    setColors(newColors);
    console.log(newColors);
  };

  return (
    <main>
      <Form addColor={addColor} />
      <Palette colors={colors} />
    </main>
  );
}

export default App;
