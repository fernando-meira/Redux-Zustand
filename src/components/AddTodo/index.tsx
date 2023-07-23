import { useState, FormEvent } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    console.log(newTodo)
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
