import { Itask, appContext } from "../Context";
import { useContext } from "react";

export function Task() {
  const { taskList, setTaskList } = useContext(appContext);

  const handleToggle = (id: number) => {
    const updatedTaskList: [] = taskList.map((task: Itask) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const handleDelete = (id: number) => {
    const taskListFiltered = taskList.filter((task: Itask) => task.id !== id);
    setTaskList(taskListFiltered);
  };

  return taskList.map(({ id, text, done }: { id: number; text: string; done: boolean }) => {
    return (
      <li key={id}>
        <p className={done ? "task-done" : ""}>{text}</p>
        <div className="icons">
          <button onClick={() => handleToggle(id)}>
            <i className="fa-regular fa-circle-check"></i>
          </button>
          <button onClick={() => handleDelete(id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    );
  });
}
