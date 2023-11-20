import {Link} from "react-router-dom";
import "./NavigationTab.css";
function Nav()
{
    return(
        <div class = "nav-tab-container" >
            <Link to="/" id = "left-button" ><img src = "https://i.ibb.co/wz8H9n5/icon.png"></img></Link> 
            <Link to="/task-list" class = "right-button">Tasks</Link>
            <Link to="/" class = "right-button" id = "nav-tab-sign-out">Sign Out</Link>
        </div>
    );
}

export default Nav;