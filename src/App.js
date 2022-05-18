import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([])


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.it !== id))
  }


  return (
    <div className="container">
      <Header title="Hello"></Header>
      { tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask}/>
        :  'You completed all your tasks'
      }

    </div>
  );
}

export default App;
