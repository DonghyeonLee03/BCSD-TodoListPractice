import { useState, useReducer, type FormEvent } from "react";
import DeleteLogo from "/src/assets/delete-svgrepo-com.svg?react";
import {
  frame,
  title,
  form,
  input,
  list,
  buttonStyle,
  label,
  check,
  contentStyle,
  deleteIcon,
} from "../src/App.css.ts";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [plan, setPlan] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", text: plan });
    setPlan("");
  };
  const handleToggleCheck = (id: number) => {
    dispatch({
      type: "TOGGLE",
      id: id,
    });
  };
  const handleDelte = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <>
      <section className={frame}>
        <h1 className={title}>Todo List</h1>
        <form className={form} onSubmit={handleSubmit}>
          <input
            className={input}
            type="text"
            autoComplete="off"
            placeholder="Todo 리스트 항목을 입력하세요."
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
          />
          <button className={buttonStyle["input"]}>추가</button>
        </form>
        {todos.map((todo) => (
          <div className={list} key={todo.id}>
            <label className={label}>
              <input
                className={check}
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggleCheck(todo.id)}
              />
              <span className={contentStyle[`${todo.done}`]}>{todo.text}</span>
            </label>
            <button
              className={buttonStyle["delete"]}
              onClick={() => handleDelte(todo.id)}
            >
              <DeleteLogo className={deleteIcon} />
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
