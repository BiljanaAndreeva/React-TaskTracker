import {React,useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const[tasks,setTasks]=useState([
    {
        id:1,
        text:"Meeting",
        day:"fryday 12.30",
        reminder:"true",
    },
    {
        id:2,
        text:"Playing",
        day:"Sunday 14.30",
        reminder:"false",
    }
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>

  );
}

export default App;
