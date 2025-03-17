import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import NewTodo from "./components/NewTodo.tsx";

function App() {

    const todos = [
        new Todo('Learn React'),
        new Todo('Learn TypeScript')
    ];

    const addTodoHandler = (todoText: string) => {

    };

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </>
    )
}

export default App
