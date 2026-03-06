import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TaskList({ tasks, fetchTasks }) {

  const markCompleted = async (id) => {
    await axios.put(`${API_URL}/api/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>

      <h2>Tasks</h2>

      {tasks.length === 0 && (
        <p>No tasks available</p>
      )}

      {tasks.map((task) => (
        <div className="task" key={task._id}>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>
            <strong>Status:</strong> {task.status}
          </p>

          {task.status !== "Completed" && (
            <button onClick={() => markCompleted(task._id)}>
              Mark Completed
            </button>
          )}

          <button
            style={{ marginLeft: "10px", background: "#dc3545" }}
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default TaskList;