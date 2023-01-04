import './App.css';

import Header from "./components/heading.js";
import ShowStudent from './components/showStudent';
import CreateStudent from './components/createStudent.js';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Header />
      <Routes >

        <Route path="/" element={<ShowStudent />} />


        <Route path="create-student" element={<CreateStudent />} />
      </Routes >
    </>

  );
}

export default App;
