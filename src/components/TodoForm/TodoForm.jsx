import React from 'react'
import styles from './TodoForm.module.css'


function TodoForm(props){
    return (
        <form className={styles.TodoForm}>
            <input />
            <button className={styles.SubmitButton}>Add Todo</button>
        </form>
    )
}


export default TodoForm