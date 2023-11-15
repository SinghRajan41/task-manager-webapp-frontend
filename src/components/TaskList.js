import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import Axios from "axios";
import {Link} from "react-router-dom"

function TaskList(props)
{
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:4000/tasks/" + props.userId)
        .then((res) => {
            if(res.status === 200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err) => alert(err));
    });
    const ListTasks = () => {
        return(
            arr.map((val, ind) => {
                return (
                    <TaskItem obj={val}/>
                )
            })
        );
    };
    return(
        <div>
            <Link to="/create-task"> 
                <button class="btn btn-success">Add Task</button>
            </Link>
            <table class="table">
                {ListTasks()}
            </table>
        </div>

    );
}

export default TaskList;