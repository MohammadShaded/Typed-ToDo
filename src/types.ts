export interface Todo {
  id: string
  text: string
  completed: boolean
}
export type TodoUpdate = Partial<Pick<Todo, 'text' | 'completed'>>
