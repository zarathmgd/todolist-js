import { appContext } from "../Context";
import { useContext } from "react";

export function Form() {
  const { taskList, setTaskList, text, setText } = useContext(appContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskListCopy: { id: number; text: string; done: boolean }[] = [...taskList];
    const id: number = Date.now();
    const taskText: string = text;
    if (text.length > 0) {
      const newTask = { id, text: taskText, done: false };
      taskListCopy.push(newTask);
      setTaskList(taskListCopy);
      setText("");
      if (taskList.length >= 8) {
        taskListCopy.pop();
        alert("Max tasks reach !");
      }
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={text}
        placeholder="New todo..."
        maxLength={80}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <div className="button-bg"></div>
      <button type="submit">+</button>
    </form>
  );
}
