import { useSelector } from 'react-redux'

export function TodoList() {
  const todos = useSelector((state: any) => state.todo)

  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}
