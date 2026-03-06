import axios from "axios";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function AddTask({ fetchTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    await axios.post(`${API_URL}/api/tasks`, {
      title,
      description
    });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add Task</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button type="submit">Add Task</button>

    </form>
  );
}

export default AddTask;