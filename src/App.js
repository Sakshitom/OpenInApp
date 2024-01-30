import Loginpage from "./components/Loginpage";
import Upload from "./components/Upload";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/uploads" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
