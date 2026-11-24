import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()

    if (text.trim() === '') {
      return
    }

    onAdd(text.trim())
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  )
}

export default TodoForm