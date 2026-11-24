import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.title)

  const handleSave = () => {
    const trimmed = editText.trim()

    if (trimmed === '') {
      setEditText(todo.title)
      setIsEditing(false)
      return
    }

    onEdit(todo.id, trimmed)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.title)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          autoFocus
        />
        <div className="item-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </li>
    )
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? 'todo-title done' : 'todo-title'}>
        {todo.title}
      </span>
      <div className="item-actions">
        <button className="btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem