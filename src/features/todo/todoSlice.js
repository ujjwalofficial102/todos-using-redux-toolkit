import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
  editingText: "",
  editingId: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload) return;
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setEditingText: (state, action) => {
      state.editingText = action.payload.text;
      state.editingId = action.payload.id;
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.editingId = null;
      state.editingText = "";
    },
  },
});

export const { addTodo, removeTodo, setEditingText, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
