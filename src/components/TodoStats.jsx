function TodoStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="stats">
      <p>
        Total: <strong>{total}</strong> | Completed:{' '}
        <strong>{completed}</strong> | Active: <strong>{active}</strong>
      </p>
      {completed > 0 && (
        <button className="btn btn-clear" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  )
}

export default TodoStats