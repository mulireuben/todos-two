import styles from './TodoItem.module.css';
export default function Todoitem({ item, todos, setTodos }) {
  function handledelete(item) {
    console.log('delete button clicked for item', item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.todoitemcontainer}>
      <div className={styles.todoiteminput}>
        {item}
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deleteButton}
          >
            del
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
