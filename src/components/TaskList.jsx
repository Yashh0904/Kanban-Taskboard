import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = ({category, list, addTask, deleteTask, editTask, makeEditable, addActive, setAddActive}) => {
    const [addForm, setAddForm] = useState(false);

    return(
        <div className="flex flex-col gap-4">
            <h1 className="mx-auto text-3xl font-semibold underline">
            {category}
            </h1>
            <div className="flex flex-col gap-4">
            {list.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} makeEditable={makeEditable} />
            ))}
            </div>
            {addForm ? <TaskForm addTask={addTask} category={category} setAddActive={setAddActive} setAddForm={setAddForm} /> : ""}
            <button 
            type="button" 
            onClick={() => {
                setAddActive(prev => !prev)
                setAddForm(prev => !prev)
            }}
            className="mx-4 py-2 px-4 rounded-md text-white bg-neutral-700"
            disabled={addActive}>
            Add New +</button>
        </div>
    )
}

export default TaskList;