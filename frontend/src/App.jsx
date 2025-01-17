import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Courses from './courses/Courses';
import Home from './home/Home';



function App() {
  return (
    <>
    <div className="dark:bg-black dark:text-white">
   {/* <Home />
   <Course /> */}
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/course" element={<Courses />}/>
   <Route path="/signup" element={<Signup />}/>

   </Routes>
   

    </div>
      
    </>
  );
}

export default App;
