import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));

      const fetchData = async () => {
          // API endpoints
          const helloMessageAPI = '/api/hello';
          const todosAPI = '/api/todos';
    
          // Make the API calls concurrently
          const [helloMessageResponse, todosResponse] = await Promise.all([
            fetch(helloMessageAPI),
            fetch(todosAPI)
          ]);
    
          const helloMessage = await helloMessageResponse.json();
          const todos = await todosResponse.json();
    
          // Update state with the data
          setMessage(helloMessage.message);
          setTodos(todos);
      };
      fetchData();
    }, []);

  return (
    <>
      <h1>{message}</h1>
      <h2>Todos</h2>
      <ul> 
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  )
}

export default App
