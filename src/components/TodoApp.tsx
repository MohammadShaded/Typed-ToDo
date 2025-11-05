import React, { useState } from 'react'
import type { Todo } from '../types'
import TodoItem from './TodoItem'

const generateId = () => Math.random().toString(36).slice(2, 9)

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const addTodo = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    const newTodo: Todo = { id: generateId(), text: trimmed, completed: false }
    setTodos((s) => [newTodo, ...s])
    setText('')
  }

  const toggleTodo = (id: string) => {
    setTodos((s) => s.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTodo = (id: string) => {
    setTodos((s) => s.filter((t) => t.id !== id))
  }

  return (
    <section className="todo-app">
      <h1>My ToDo App</h1>

      <div className="add-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="New todo"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo()
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </section>
  )
}

export default TodoApp
