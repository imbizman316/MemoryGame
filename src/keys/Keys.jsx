import { v4 as uuid } from 'uuid';

const todos = [
  { task: "mow the yard", id: uuid()},
  { task: "Work on Odin Projects", id: uuid()},
  { task: "Feed the cat", id: uuid()},
];

const months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function TodoList() {
  return (
    <>
    <ul>
      {todos.map((todo) => (
        <>
        <li key={todo.id}>{todo.task}</li>
        </>
      ))}
    </ul>
    <MonthList />
    </>
  )
}

function MonthList() {
  return (
    <ol>
      {months.map((month,index) => (
        <li key={index}>{month}</li>
      ))}
    </ol>
  )
}

export default TodoList;