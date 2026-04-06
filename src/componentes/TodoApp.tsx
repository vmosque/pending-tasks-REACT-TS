import { useActionState, useState } from "react";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
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
      </div>
    </div>
  );
};
