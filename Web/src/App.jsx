import { Routes, Route } from "react-router-dom";
// import { Container } from '@mui/material';
import ShowNavbar from "./components/navbar";
import ShowLoginpage from "./pages/loginpage";
import ShowHomepage from "./pages/homepage";
import ShowBookpage from "./pages/bookpage";
import ShowAccountpage from "./pages/accountpage";

function App() {
  return (
    <>
      <ShowNavbar/>
      {/* <Container> */}
        <Routes>
          <Route path="/" element={<ShowLoginpage/>} />
          <Route path="/homepage" element={<ShowHomepage/>} />
          <Route path="/bookpage" element={<ShowBookpage/>} />
          <Route path="/accountpage" element={<ShowAccountpage/>} />
        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;
