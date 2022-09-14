import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("OnePunch");

  // Para actualizar el input text ya que sino no funciona en react
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  // Al precionar enter se añade un nuevo valor a la lista
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
      aria-label="form"
    >
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        // onChange={(e) => onInputChange(e)}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
