import React from 'react'

const Tasks = () => {
    return (
        <div className="pt-[58px] pl-[58px] h-screen">
            <div className="p-8 flex flex-col gap-8 h-full">
                <div className="border border-dashed border-border rounded-md flex-1 h-full flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-text text-2xl font-semibold">You have no tasks</h1>
                    <p className="text-md text-border">You can start adding tasks and keep track.</p>
                    <button className="bg-white text-primary px-4 py-2 rounded-md mt-2">Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default Tasks