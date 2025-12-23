import { useEffect, useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskList');
    return saved ? JSON.parse(saved) : []
  });

  const [addActive, setAddActive] = useState(false);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks(
      tasks.filter(task => task.id !== taskId)
    );
  }

  function editTask(taskId, taskName, taskDesc) {
    setTasks(tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          name: taskName,
          description: taskDesc,
          editable: false
        }
      }
      return task;
    }))
  }

  function makeEditable(taskId) {
    setTasks(tasks.map(task => {
      if(task.id === taskId){
        return {...task, editable: true};
      }
      return task;
    }))
  }

  const todoList = tasks.filter(task => task.category === 'todo');
  const progressList = tasks.filter(task => task.category === 'progress');
  const reviewList = tasks.filter(task => task.category === 'review');
  const finishedList = tasks.filter(task => task.category === 'finished');

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className='min-h-screen grid grid-cols-4 gap-2 p-4'>
      <TaskList category="todo" list={todoList} addTask={addTask} deleteTask={deleteTask} editTask={editTask} makeEditable={makeEditable} addActive={addActive} setAddActive={setAddActive} />

      <TaskList category="progress" list={progressList} addTask={addTask} deleteTask={deleteTask} editTask={editTask} makeEditable={makeEditable} addActive={addActive} setAddActive={setAddActive} />

      <TaskList category="review" list={reviewList} addTask={addTask} deleteTask={deleteTask} editTask={editTask} makeEditable={makeEditable} addActive={addActive} setAddActive={setAddActive} />

      <TaskList category="finished" list={finishedList} addTask={addTask} deleteTask={deleteTask} editTask={editTask} makeEditable={makeEditable} addActive={addActive} setAddActive={setAddActive} />
    </div>
  )
}

export default App
