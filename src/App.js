import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { nanoid } from "nanoid";

function App(props) {

const [tasks, setTasks] = useState(props.tasks);

const taskList = tasks.map((task) => (
  <ItemList
  id={task.id}
  name={task.name}
  key={task.id}
  deleteTask={deleteTask}
  
/>
  ));

  const tasksNoun = taskList.length !== 1 ? "Tareas Ingresadas" : "Tarea Ingresada";
  const headingText = taskList.length !== 0 ? `${taskList.length} ${tasksNoun} ` : "No hay tareas ingresadas";

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <html>
      <body  >
        <div className = "main">
          <div className="container">
            <Form addTask={addTask}/>
            <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
              {headingText}
            </h2>
            <ul
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading">
              {taskList}
            </ul>
          </div>
        </div>

      </body>
    </html>
  );
}

export default App;
