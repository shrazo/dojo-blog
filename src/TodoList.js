import React from 'react';
const TodoList = ({ todos, title }) => {
  return (
    <div className="todo-list">
      <h2>{title}</h2>
      <ul>
        {todos.filter(todo =>!todo.completed).map( td =>(
            <li key={td.id} >{td.title} </li>
          )
        )}
      </ul>
    </div>
  )
}

export default TodoList;