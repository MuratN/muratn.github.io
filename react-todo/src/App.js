import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
// import AddTodo from './AddTodo';
import Loader from './loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => import('./AddTodo'))

function App() {

  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React project</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        { todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} /> 
          ): (
            loading ? null : <p>No todos</p> 
          )
        }
      </div>
    </Context.Provider>
  );
}

export default App;
