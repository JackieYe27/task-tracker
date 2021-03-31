import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react';
import AddTask from './components/AddTask';


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([{
      id: 1,
      text: 'task1',
      day: '1/1/11',
      reminder: false
  },
      {id: 2,
      text: 'task2',
      day: '1/1/11',
      reminder: false
  },
      {id: 3,
      text: 'task3',
      day: '1/1/11',
      reminder: false}
  ]);


  // Add Tasks
  const addTask = (task) => {
    console.log("task", task)
    const id = Math.floor(Math.random() + 100) + 1
    const newTask = {id, ...task } 
    setTasks([...tasks, newTask]);
  }

  // Delete Task that is passed down to Task
  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map(task => {
      return task.id === id ? {...task, reminder: !task.reminder} : task
    }))
  }

    return (
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks ={tasks} onDelete ={deleteTask} onToggle ={toggleReminder}/> : 'No More Tasks Breh'}
      </div>
    );
}

export default App;
