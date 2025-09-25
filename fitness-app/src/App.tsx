import { Box } from "@mui/material";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import ExerciseDetail from "./page/ExerciseDetail";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <Home/>
      <Box  className="w-[400px]">
       <Navbar />
        <Routes>
          <Route path="/" element={ <Home />  } />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </>
  )
};

export default App;
