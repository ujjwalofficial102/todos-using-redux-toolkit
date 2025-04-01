import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editingText = useSelector((state) => state.editingText);
  const editingId = useSelector((state) => state.editingId);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingText) {
      setInput(editingText);
    }
    inputRef.current?.focus(); // Auto-focus on mount
  }, [editingText]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateTodo({ id: editingId, text: input }));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingText ? <>Update Todo</> : <>Add Todo</>}
      </button>
    </form>
  );
}

export default AddTodo;
