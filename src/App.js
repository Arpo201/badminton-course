import { Routes, Route } from "react-router-dom";
import ShowNavbar from "./components/navbar";

function App() {
  return (
    <>
      <ShowNavbar/>
      <Routes>
        {/* <Route path="/" element={<ShowHome />} /> */}
      </Routes>
    </>
  );
}

export default App;
