import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    },
    input: {
        margin: '0',
        padding: '0',
        marginRight: '5px',
        display: 'inline-block',
        verticalAlign: 'middle'
    }
}

function TodoItem({todo, index, onChange}) {
    const { removeTodo } = useContext(Context);

    const classes =[];

    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <div className={classes.join(' ')}>
                <input type="checkbox"
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}
                    />
                <strong>{index + 1}</strong>
                &nbsp;
                <span>{todo.title}</span>
            </div>
            <button className='button'
                // onClick={removeTodo.bind(null, todo.id)}
                onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;