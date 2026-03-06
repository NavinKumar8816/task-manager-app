import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const API_URL = process.env.REACT_APP_API_URL;

function App() {

  const [tasks,setTasks] = useState([]);

  const fetchTasks = async ()=>{
    const res = await axios.get(`${API_URL}/api/tasks`);
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