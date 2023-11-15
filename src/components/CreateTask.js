import Axios from "axios";
import {useState} from "react";
import TaskForm from "./TaskForm";

function CreateTask(props)
{
    const [arr, setArr] = useState([]);
    const getState = (childData) =>
    {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {userId: props.userId, taskName: arr[0], date: new Date(arr[1]), priority: arr[2], setReminder: arr[3]};
        console.log(data);
        Axios.post("http://localhost:4000/add-task", data)
        .then((res) => {
            if(res.status === 200) alert("Record created successfully");
            else Promise.reject();
        })
        .catch(res => alert(res));
        // alert(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
        event.target.reset();
    };

    const currentDate = () => {
        let yourDate = new Date();
        return yourDate.toISOString().split('T')[0];
    };
    return (    
        <form onSubmit={handleSubmit}>
            <TaskForm getState={getState} taskNameValue="" dateValue={currentDate} priorityValue={0} reminderValue={true}>Add Task</TaskForm>
        </form>
    );
}

export default CreateTask;