export const addTaskAction = (task)=>{
    return {type :"Add_task" ,payload:task}
}

export const updateTaskAction = (newtask)=>{
    return {type :"Update_task" ,payload:newtask}
}

export const deleteTaskAction = (id)=>{
    return {type :"Delete_task", payload:id}
}