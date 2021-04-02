import React, {useState} from 'react';
import PropTypes from 'prop-types';


const styles = {
    form: {
        marginBottom: '10px'
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return ({
        bind: {
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    })
}

function AddTodo({ onCreate }) {
    const input = useInputValue('');

    function submitHandler(event) {
        event.preventDefault();

        if(input.value().trim()) {
            onCreate(input.value());
            input.clear();
            // setValue('');
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler} >
            {/* <input value={value} onChange={event => setValue(event.target.value)} /> */}
            <input {...input.bind} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo; 