import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
      <input
        type="text"
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition duration-200"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition duration-200 cursor-pointer shrink-0"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
