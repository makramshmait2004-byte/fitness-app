import React from "react";
import { Box } from "@mui/material";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Box  className="w-[400px]">
       <Navbar />
        <Routes>
          <Route path="/" element={ <Home />  } />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </>
  )
};

export default App;
