import { useState } from "react";
import TaskList from "./TaskList";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTaskList((taskBefore) => [...taskBefore, newTask]);
    setNewTask("");
  };
  const handleDeleteTask = (index: number) => {
    setTaskList((task) => task.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Tasks List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  );
};
