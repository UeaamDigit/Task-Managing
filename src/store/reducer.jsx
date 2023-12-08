const initial_state = {
    tasks: [
        {
            id: 1,
            task: "Reviser Javascript",
            completed: false,
        },
        {
            id: 2,
            task: "Reviser Javas",
            completed: true,
        },
        {
            id: 3,
            task: "Reviser Python",
            completed: false,
        },
    ],
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "Add_task":
            return { ...state, tasks: [...state.tasks, action.payload] };
        case "Update_task":
            const updatedTasks = state.tasks.map((task) =>
                task.id === parseInt(action.payload.id)
                    ? {
                        ...task,
                        task: action.payload.task,
                        completed: action.payload.completed,
                    }
                    : task
            );
            return { ...state, tasks: updatedTasks };
        case "Delete_task":
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== parseInt(action.payload)
                ),
            };
        default:
            return state;
    }
};

export default reducer;
