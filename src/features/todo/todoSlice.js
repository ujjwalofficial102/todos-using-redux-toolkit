import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
  editingText: "",
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
      state.editingText = "";
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    setEditingText: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
      state.editingText = action.payload.text;
    },
  },
});

export const { addTodo, removeTodo, setEditingText } = todoSlice.actions;

export default todoSlice.reducer;
