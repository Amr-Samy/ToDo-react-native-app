import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      // console.log(action.payload);
      if (title) {
        const newTodo = {
          id: Date.now(),
          isDone: false,
          title,
          description,
        };
        const newList = [newTodo, ...state.todoList];
        // await AsyncStorage.setItem("todoList", JSON.stringify(newList));
        state.todoList = [...newList];
      }
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todoList = state.todoList.filter((todo) => +todo.id !== +id);
      // let newList = state.todoList.filter((todo) => +todo.id !== +id);
      // await AsyncStorage.setItem("todoList", JSON.stringify(newList));
      // settodoList(newList);
    },
    toggleTodoStatus: (state, action) => {
      const { id } = action.payload;
      const todo = state.todoList.find((res) => res.id === id);
      todo.isDone = !todo.isDone;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoStatus } = TodoSlice.actions;

export default TodoSlice;
