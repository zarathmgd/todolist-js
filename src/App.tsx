import { Itask, appContext } from "./Context";
import { useContext } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

function App() {
  const { taskList } = useContext(appContext);

  const undoneTask: number = taskList.reduce((acc: number, task: Itask) => (task.done ? acc : acc + 1), 0);

  return (
    <div className="App">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div>
      <h1>TO DO</h1>
      <Form />
      <h6>Undone task : {undoneTask}</h6>
      <ul>
        <Task />
      </ul>
    </div>
  );
}

export default App;
