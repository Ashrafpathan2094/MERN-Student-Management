import './App.css';

import Header from "./components/heading.js";
import ShowStudent from './components/showStudent';
import CreateStudent from './components/createStudent.js';

function App() {
  return (
    <div className="container-fluid">

      <Header />
      <div className="row mt-5">

        <div className="col-sm-12 col-md-12 col-lg-8" >
          <ShowStudent />
        </div>

        <div  className="col-sm-12 col-md-12 col-lg-4 p-5">
          <CreateStudent />
        </div>

      </div>
    </div>
  );
}

export default App;
