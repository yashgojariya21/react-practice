import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-xl bg-slate-800/60 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Redux Toolkit Todo
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
