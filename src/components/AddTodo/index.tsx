import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store'

export function AddTodo() {
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    dispatch(add(newTodo))

    setNewTodo('')
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        value={newTodo}
        placeholder="Novo to-do"
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}
