import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/NavigationTab"
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList' ;
import EditTask from './components/EditTask';
import ShowNavBar from './components/ShowNavBar';
import LogIn from './components/Login';
import SignUp from './components/Signup';
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState("");
  const getUserId = (newUserId) => {
    setUserId(newUserId);
  };
  return (
    <div class = "container">
      <HashRouter>
        <ShowNavBar>
          <Nav />
        </ShowNavBar>
        <Routes>
          <Route path="/" element={<SignUp getUserId={getUserId}/>}/>
          <Route path="/login" element={<LogIn getUserId={getUserId}/>} />
          <Route path="/create-task" element={<CreateTask userId={userId}/>}/>
          <Route path="/task-list" element={<TaskList userId={userId}/>}/>
          <Route path="/update-task/:id" element={<EditTask userId={userId}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;