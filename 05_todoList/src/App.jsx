import { useState, useEffect } from "react";
import "./App.css";
// import TodoList from "./components/TodoList";

function App() {
  function getItem() {
    const data = JSON.parse(localStorage.getItem("allTodo"));
    return data || [];
  }

  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState(getItem());

  useEffect(() => {
    localStorage.setItem("allTodo", JSON.stringify(allTodo));
  }, [allTodo]);

  const onTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTodo = {
        todoTask: todo,
        isCompleted: false,
      };
      setAllTodo([...allTodo, newTodo]);
      setTodo("");
    }
  };

  const removeItem = (idx) => {
    const newTodo = allTodo.filter((el, index) => index !== idx);
    setAllTodo([...newTodo]);
  };

  return (
    <>
      {console.log(allTodo)}
      <h1>ToDo List</h1>
      <div className="App">
        <input
          type="text"
          placeholder="Feed your Task"
          value={todo}
          onChange={onTodoChange}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="todoList">
        <ol>
          {allTodo.map((el, index) => (
            <li key={index}>
              {el.isCompleted ? <strike>{el.todoTask}</strike> : el.todoTask}
              <button onClick={() => removeItem(index)} className="mx-8">
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
