import { useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import {useEffect, useState} from "react";
import Axios from "axios";


function EditTask(props)
{
    const {id} = useParams();

    const [initialValue, setInitialValue] = useState({taskName: "", date: "", priority: 0, setReminder: false});
    const [newdata, setData] = useState([]);
    const getState = (childData) =>
    {
        setData(childData);
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/update-task/" + id)
        .then((res) => {
            if(res.status === 200) {
                const {taskName, date, priority, setReminder} = res.data;
                setInitialValue({taskName, date, priority, setReminder});
            } else Promise.reject();
        })
        .catch(err => alert(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {userId: props.userId, taskName: newdata[0], date: newdata[1], priority: newdata[2], setReminder: newdata[3]};
        Axios.put("http://localhost:4000/update-task/" + id, data)
        .then((res) => {
            if(res.status === 200) alert("Record updated successfully");
            else Promise.reject();
        })
        .catch(res => alert(res));
    };
    return (
        <form onSubmit={handleSubmit}>
            <TaskForm getState={getState} taskNameValue={initialValue.taskName} dateValue={initialValue.date.substring(0, 10)} priorityValue={initialValue.priority} reminderValue={initialValue.setReminder}>Edit Task</TaskForm>
        </form>
    );
}

export default EditTask;