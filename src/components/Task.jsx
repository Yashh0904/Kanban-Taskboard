import { SquarePen, Trash, CheckCheck } from "lucide-react"
import { useState } from "react"

function Task({task, deleteTask, editTask, makeEditable, handleDrag}) {
  const [taskName, setTaskName] = useState(task.name);
  const [taskDesc, setTaskDesc] = useState(task.description);

  return (
    <div draggable 
    onDragStart={() => handleDrag(task.id)}>
    {
        (task.editable) ?
        <div className="flex flex-col gap-4 w-auto rounded-xl bg-neutral-200 mx-2 px-8 py-4">
            <input value={taskName} 
            onChange={(e) => {
                setTaskName(e.target.value)
            }}
            className="text-2xl font-medium w-full rounded-md bg-neutral-100 border border-neutral-400 px-3 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none
            focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600" />

            <input value={taskDesc}
            onChange={(e) => {
                setTaskDesc(e.target.value)
            }}
            className="text-md  w-full rounded-md bg-neutral-100 border border-neutral-400 px-3 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none
            focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600" />
            
            <div className="flex justify-end gap-2">
                <button 
                type="button"
                onClick={() => editTask(task.id, taskName, taskDesc)}
                ><CheckCheck className="text-neutral-500" /></button>
                
            </div>
        </div> 
        :
        <div className="flex flex-col gap-4 w-auto rounded-xl bg-neutral-200 mx-2 px-8 py-4">
            <p className="text-2xl font-medium">{task.name}</p>
            <p className="text-md">{task.description}</p>
            <div className="flex justify-end gap-2">
                <button 
                type="button"
                onClick={() => makeEditable(task.id)}
                ><SquarePen className="text-neutral-500" /></button>

                <button 
                type="button"
                onClick={() => {deleteTask(task.id)}}
                ><Trash className="text-neutral-500" /></button>
            </div>
        </div>
    }
    </div>
  )
}

export default Task