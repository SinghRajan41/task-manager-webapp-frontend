import {Link} from "react-router-dom";

function Nav()
{
    return(
        <nav class="navbar bg-warning px-3">
            <Link to="/" class="navbar-brand">Task Manager</Link>
            <div class="nav">
                <Link to="/task-list" class="nav-link">Tasks</Link>
                <Link to="/" class="nav-link">Sign Out</Link>
            </div>
        </nav>
    );
}

export default Nav;