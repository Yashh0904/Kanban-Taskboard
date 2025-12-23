import { CheckCheck } from 'lucide-react'
import { useState } from 'react'

function TaskForm({addTask, category, setAddActive, setAddForm}) {
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");

  return (
    <div className="flex flex-col gap-4 w-auto border-neutral-500 rounded-xl bg-neutral-200 mx-2 px-8 py-4">
        <input type="text" 
        className="text-2xl font-medium w-full rounded-md bg-neutral-100 border border-neutral-400 px-3 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none
        focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600" 
        placeholder='Enter Task name'
        onChange={(e) => setNameInput(e.target.value)} />
        
        <input type="text" 
        className="text-md w-full rounded-md bg-neutral-100 border border-neutral-400 px-3 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none
        focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600" 
        placeholder='Enter Task Description'
        onChange={(e) => setDescInput(e.target.value)} />

        <div className="flex justify-end gap-2">
            <button type="button"
            onClick={() => {
              addTask({
              id: crypto.randomUUID(),
              name: nameInput,
              description: descInput,
              category: category,
              editable: false
            })
            setAddActive(prev => !prev)
            setAddForm(prev => !prev)
            }}>
              <CheckCheck className="text-neutral-500" />
            </button>
        </div>
    </div>
  )
}

export default TaskForm