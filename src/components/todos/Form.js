import { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState('');
  // const [todos,setTodos]=useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
    console.log(todos);
  }
  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <input
            className={styles.inputContainer}
            placeholder='input todo item'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type='text'
          />
          <button className={styles.mordenButton} type='submit'>
            add
          </button>
        </div>
      </form>
    </div>
  );
}
