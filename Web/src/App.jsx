import { Routes, Route } from "react-router-dom";
import ShowNavbar from "./components/navbar";
import ShowLoginpage from "./pages/loginpage";
import ShowHomepage from "./pages/homepage";
import ShowBookpage from "./pages/bookpage";
import ShowAccountpage from "./pages/accountpage";
import ShowRegisterpage from "./pages/registerpage";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ShowNavbar/>
      <Routes>
        <Route path="/" element={<ShowLoginpage/>} />
        <Route path="/register" element={<ShowRegisterpage/>} />
        <Route path="/homepage" element={<ShowHomepage/>} />
        <Route path="/bookpage" element={<ShowBookpage/>} />
        <Route path="/accountpage" element={<ShowAccountpage/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
