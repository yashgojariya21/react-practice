import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const [todoMsg, setTodoMsg] = useState("");
  const [editableId, setEditableId] = useState(null)

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditableId(todo.id)
    setTodoMsg(todo.text)
  };

  const handleSave = (id) => {
    if(todoMsg) {
      dispatch(updateTodo({id, text: todoMsg}));
    }
    setEditableId(null)
  }

  return (
    <>
      <div className="text-xl font-bold my-4 text-white">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-3 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* <div className="text-white">{todo.text}</div> */}

            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                editableId === todo.id ? "border-white/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={editableId === todo.id ? todoMsg : todo.text}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={editableId !== todo.id}
            />

            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (editableId === todo.id) {
                    handleSave(todo.id);
                  } else {
                    handleEdit(todo);
                  }
                }}

                className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-md cursor-pointer"
              >
                {editableId ? '📁' : '✏️' }
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
