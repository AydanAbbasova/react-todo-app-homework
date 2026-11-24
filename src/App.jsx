import { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoStats from './components/TodoStats'
import TodoList from './components/TodoList'

const initialTodos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Practice useState', completed: false },
  { id: 3, title: 'Build React components', completed: true },
  { id: 4, title: 'Practice useEffect', completed: false },
  { id: 5, title: 'Complete homework', completed: false },
]

const STORAGE_KEY = 'todos'

function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === null) {
      return initialTodos
    }
    return JSON.parse(saved)
  } catch {
    return initialTodos
  }
}

function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const total = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = total - completedCount

  return (
    <div className="app">
      <Header title="Todo App" />
      <TodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <TodoStats
        total={total}
        completed={completedCount}
        active={activeCount}
        onClearCompleted={clearCompleted}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  )
}

export default App