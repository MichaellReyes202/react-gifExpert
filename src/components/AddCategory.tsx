import React, { useState } from "react"


interface AddCategoryProps {
  /**
   * React.Dispatch: Es un tipo genérico de React que representa una función 
   * para actualizar el estado (como la que devuelve useState).
   * 
   * React.SetStateAction<string[]>: Indica que la función setCategories puede 
   * recibir un nuevo valor (un arreglo de strings, string[]) o una función que actualice el estado anterior.
   * 
   */
  setCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (newCategory: string) => void;
}

/*
define un componente funcional llamado AddCategory que usa el tipo React.FC 
(Functional Component) y espera las props definidas en AddCategoryProps.
*/

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    // si la paso un callback a la funcion (como primer parametro recibira el estado actual )
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue("");
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

