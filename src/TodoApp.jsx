import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input === "") return;
    setTodos([...todos, input]);
    setInput(""); 
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a todo"
        
        // onKeyDown={e => {if (e.key === 'Enter') {
        //   handleAdd();
        // }}}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
      />

      <button onClick={handleAdd} >Add</button>

      {todos.length === 0 ? (
        <p>No todo yet</p>
      ) : (
        <ul>
          {todos.map((todo,  index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
          ))}
        </ul>
      )}
    </div>
  )
}