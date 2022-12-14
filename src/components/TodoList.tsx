import React from 'react';
import { Todo } from '../todo.model';
import './TodoList.css';

interface ToDoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<ToDoListProps> = (props: ToDoListProps) => {
  
  return (
    <ul>
      {
        props.items.map(todo => (
        <li key={todo.id}><span>{todo.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
        ))
      }
    </ul>
  )
}

export default TodoList

