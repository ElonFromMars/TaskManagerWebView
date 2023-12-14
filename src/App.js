import { useState, useEffect } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import TaskDescription from './TaskDescription.js';


export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [openTaskDescription, setOpenTaskDescription] = useState(false);
  const [openedTask, setOpenedTask] = useState(null);
  //const [loadedTasks, setData] = useState(null);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/tasks');
        const result = await response.json();
        setTasks(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        //setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs once after the initial render

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function handleOpenTask(taskId) {
    setOpenedTask(tasks.find(t => t.id === taskId));
    setOpenTaskDescription(true);
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onOpenTask={handleOpenTask}
      />
      {openTaskDescription && 
      <TaskDescription 
        task={openedTask}
        open={openTaskDescription} 
        setOpen={setOpenTaskDescription}
      />}
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
