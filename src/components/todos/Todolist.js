import Todoitem from './Todoitem';
import styles from "./Todolist.module.css"

export default function Todolist({ todos ,setTodos}) {
  console.log(todos);
  return (
    <div className={styles.todolisting}>
      {todos.map((item, index) => (
        <Todoitem key={index} item={item} todos={ todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
