import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import NewTodo from "./components/NewTodo.tsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </>
    )
}

export default App
