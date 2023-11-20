// import { Link } from "react-router-dom";
// import Axios from "axios";
// import "./TaskItem.css";
// function TaskItem(props) {
//     const date = new Date(props.obj.date);
//     const handleClick = () => {
//         Axios.delete("http://localhost:4000/delete-task/" + props.obj._id)
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert("Task removed from agenda");
//                 }
//             })
//             .catch(err => alert(err));
//     };
//     const values = ["High", "Medium", "Low"];
//     return (
//         <div class="task-item-container">


//             <div class="task-item-desc-container">
//                 {props.obj.taskName}
//                 <br></br>
//                 Due : {date.toLocaleDateString('en-US')}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 Priority : {values[props.obj.priority]}
//             </div>

//             <div class="task-item-button-container">
//                 <button class="task-item-button" id="task-item-edit-button">
//                     <Link to={"/update-task/" + props.obj._id}>Edit Task</Link>
//                 </button>
//                 <button class="task-item-button" onClick={handleClick} id="task-item-done-button">Mark As Done</button>
//                 <button class="task-item-button" onClick={handleClick} id="task-item-delete-button">Delete</button>
//             </div>



//         </div>
//     );
// }

// export default TaskItem;











import { Link } from "react-router-dom";
import Axios from "axios";
import "./TaskItem.css";
import MarkButton from "./MarkButton";
function TaskItem(props) {
    const date = new Date(props.obj.date);
    const handleClick = () => {
        Axios.delete("http://localhost:4000/delete-task/" + props.obj._id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Task removed from agenda");
                }
            })
            .catch(err => alert(err));
    };
    const toggleMarked = () => {
        if(props.obj.marked === false) props.obj.marked = true;
        else props.obj.marked = false;

        Axios.put("http://localhost:4000/update-task/" + props.obj._id, props.obj)
        .then((res) => {
            if(res.status === 200) alert("Task status updated");
            else Promise.reject();
        })
        .catch(res => alert(res));
    }
    const values = ["High", "Medium", "Low"];
    return (
        <div id="ti1">


            <div id = "ti2">
                <div id = "ti8">
                    <p>{props.obj.taskName}</p>
                </div> 
                <div id = "ti9">
                    Due : {date.toLocaleDateString('en-US')}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Priority : {values[props.obj.priority]}
                </div>
            </div>

            <div id = "ti3">
                <button id = "ti7" >
                    <Link id="ti4" to={"/update-task/" + props.obj._id}>Edit Task</Link>
                </button>
                <button id="ti5" onClick={toggleMarked} ><MarkButton marked={props.obj.marked}/></button>
                <button id="ti6" onClick={handleClick} >Delete</button>
            </div>



        </div>
    );
}

export default TaskItem;