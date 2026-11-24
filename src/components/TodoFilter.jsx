function TodoFilter({ filter, onFilterChange }) {
  const filters = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item.name}
          onClick={() => onFilterChange(item.name)}
          className={filter === item.name ? 'filter-btn active' : 'filter-btn'}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter