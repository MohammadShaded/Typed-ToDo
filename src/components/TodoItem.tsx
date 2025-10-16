import type { Todo } from '../types'

export interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button className="delete" onClick={() => onDelete(todo.id)} aria-label={`Delete ${todo.text}`}>
        ×
      </button>
    </li>
  )
}

export default TodoItem
