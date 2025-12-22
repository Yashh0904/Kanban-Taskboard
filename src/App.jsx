import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='min-h-screen grid grid-cols-4 gap-4 p-6 '>
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
    </div>
  )
}

export default App
