import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg capitalize-first"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        placeholder = "Ingresa la tarea"
      />
    <button type="submit" className="buttonAdd">
     Añadir <i class='far fa-calendar-alt'></i>
      </button>
    </form>
  );
}

export default Form;
