import { Routes, Route } from "react-router-dom";
import ShowHome from "./pages/homepage";
import ShowBookpage from "./pages/bookpage";
import ShowNavbar from "./components/navbar";
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <ShowNavbar/>
      <Container>
        <Routes>
          <Route path="/" element={<ShowHome/>} />
          <Route path="/bookpage" element={<ShowBookpage/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
