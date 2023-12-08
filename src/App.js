import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/add-task" element={<AddTask />}></Route>
          <Route path="/update-task/:id" element={<UpdateTask />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
