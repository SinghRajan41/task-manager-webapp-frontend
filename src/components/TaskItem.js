import {Link} from "react-router-dom";
import Axios from "axios";

function TaskItem(props)
{
    const date = new Date(props.obj.date);
    const handleClick = () => {
        Axios.delete("http://localhost:4000/delete-task/" + props.obj._id)
        .then((res) => {
            if(res.status === 200) {
                alert("Task removed from agenda");
            }
        })
        .catch(err => alert(err));
    };
    return (
        <div>
            {props.obj.userId + " " + props.obj.taskName + " " + date.toLocaleDateString('en-US') + " " + props.obj.priority + " " + (props.obj.setReminder ? 1 : 0)}
            <button class="ms-5 btn">
                <Link to={"/update-task/" + props.obj._id}>Edit</Link>
            </button>
            <button class="btn btn-success" onClick={handleClick}>Completed</button>
            <button class="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
    );
}

export default TaskItem;