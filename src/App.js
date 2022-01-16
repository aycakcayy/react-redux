
import React from 'react';
// import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reduxStore/counter';
import { addTask, removeTask } from './reduxStore/tasks';

export default function App() {
  const { counter, tasks } = useSelector((state) => state);
  // const counter = useSelector((state) => state.counter);
  // const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addTask(event.target.task.value));
    event.target.task.value = '';
  };

  return (
    <div>
      <hr />
      <form onSubmit={formHandler}>
        <input type="text" name="task" id="task" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item) => (
          <li key={item.id} onClick={() => dispatch(removeTask(item.id))}>
            {item.title}
          </li>
        ))}
      </ul>
      <hr />

      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
