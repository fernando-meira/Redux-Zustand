import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'
import { AddTodo, TodoList } from './components'
export function App() {
  return (
    <ReduxProvider store={store}>
      <AddTodo />

      <TodoList />
    </ReduxProvider>
  )
}
