import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  const [tasks,setTasks] = useState([]);

  const fetchTasks = async ()=>{
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return(

    <div className="container">

      <h1>Task Manager</h1>

      <AddTask fetchTasks={fetchTasks}/>

      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>

    </div>

  )
}

export default App;