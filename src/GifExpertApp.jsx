import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log("valorant");
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };
  // console.log(categories);

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(e) => onAddCategory(e)}
      />
      {/* Listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          // return (<li key={category}>{category}</li>);
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
