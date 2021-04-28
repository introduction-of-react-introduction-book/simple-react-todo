import { useState } from "react";

function App() {
  const [idCounter, setIdCounter] = useState(0);
  const [todos, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputText = e.target["task"].value;
    const nextid = idCounter + 1;
    setIdCounter(nextid);
    setTodo([...todos, { id: nextid, task: inputText, checked: false }]);
  };

  const handleClickDeleteButton = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="task" />
        <button>登録</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" />
            {todo.task}
            <button onClick={() => handleClickDeleteButton(todo.id)}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
