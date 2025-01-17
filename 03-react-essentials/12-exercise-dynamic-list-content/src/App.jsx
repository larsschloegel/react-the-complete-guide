import Todo from './Todo'

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

function App() {
  return (
      DUMMY_TODOS.map((todo) => (
        <Todo name={todo}></Todo>
      ))
  )
}

export default App
