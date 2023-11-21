import { useEffect, useState } from "react";
import "./taskform.css";

function TaskForm(props) {
  const [taskName, setTaskName] = useState(props.taskNameValue);
  const [date, setDate] = useState(props.dateValue);
  const [priority, setPriority] = useState(props.priorityValue);
  const [reminderBool, setReminderBool] = useState(props.reminderValue);

  useEffect(() => {
    setTaskName(props.taskNameValue);
    setDate(props.dateValue);
    setPriority(props.priorityValue);
    setReminderBool(props.reminderValue);
  }, [
    props.taskNameValue,
    props.dateValue,
    props.priorityValue,
    props.reminderValue,
  ]);

  function handleClick() {
    props.getState([taskName, date, priority, reminderBool]);
  }
  return (
    <div>
      <div style={{ maxWidth: "50%" }} className="aa1">
        <input
          value={taskName}
          class="form-control m-3"
          onChange={(event) => setTaskName(event.target.value)}
          placeholder="Task/Event name"
        />
        <input
          type="date"
          defaultValue={date}
          class="form-control m-3"
          onChange={(event) => setDate(event.target.value)}
        />
        <label className="m-3 text-black" style={{ fontSize: "20px" }}>
          Priority:
        </label>
        <select
          onChange={(event) => setPriority(event.target.value)}
          value={priority}
          className="m-3"
          style={{ fontSize: "16px" }}
        >
          <option value={0}>High</option>
          <option value={1}>Medium</option>
          <option value={2}>Low</option>
        </select>
        <br />
        <label className="m-3 text-black" style={{ fontSize: "20px" }}>
          Set Reminder:
        </label>
        <select
          value={reminderBool}
          onChange={(event) => setReminderBool(event.target.value)}
          className="m-3"
          style={{ fontSize: "16px" }}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <button
          class="btn btn-success my-3 d-block mx-auto"
          onClick={handleClick}
          type="submit"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
