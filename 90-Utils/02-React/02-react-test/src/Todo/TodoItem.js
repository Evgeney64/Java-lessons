import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '.1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
  //console.log('todo', todo);
  const { removeTodo } = useContext(Context)

  const classes = [];
  if (todo.completed){
    classes.push('done');
  }

  return (
    <li style={styles.li} >
        <span className={classes.join(' ')} >
            <input
                type="checkbox"
                checked={todo.completed}
                style={styles.input}
                //onChange={() => console.log(todo.id)} />
                onChange={() => onChange(todo.id)} />
            &nbsp;&nbsp;&nbsp;
            <strong>{index + 1}</strong>
            &nbsp;&nbsp;&nbsp;
            {todo.title}
        </span>
        <button
            className='rm'
            //onClick={ () => removeTodo(todo.id) }
            onClick={ removeTodo.bind(null, todo.id) }
            >&times;
        </button>
    </li>
  );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem;