import './App.css';

import Header from "./components/heading.js";
import ShowStudent from './components/showStudent';
import CreateStudent from './components/createStudent.js';
import { Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Signup from "./components/signup";

function App() {
  return (
    <>

      <Routes >

        <Route path="/" element={<Login />} />


        <Route path="create-student" element={<CreateStudent />} />

        <Route path="signup" element={<Signup />} />

      </Routes >
    </>

  );
}

export default App;
