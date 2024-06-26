import "bootswatch/dist/darkly/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/RecordList";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/students/create" element={<Create />} />
        <Route exact path="/students/Edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
