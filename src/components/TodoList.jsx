import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import {useParams} from 'react-router-dom'
// import { selectActiveFilter } from '../store/filters/filters-selectors';

export const TodoList = () => {
  const dispatch = useDispatch();
  const {filter} = useParams();
  // const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  return (
    <ul className='todos'>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}{' '}
          <button className='btn btn-remove' onClick={() => dispatch(removeTodo(todo.id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
