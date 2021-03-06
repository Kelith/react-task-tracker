import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setshowAddTask] = useState(false)

  const addTask = (task) => {
    // I don't have a backand for the ids ... that's bad practice but only for the purpose of this tutorial
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? 
        (
          <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}/>
        ):(  'You completed all your tasks'
      )}
    </div>
  );
}

export default App;
