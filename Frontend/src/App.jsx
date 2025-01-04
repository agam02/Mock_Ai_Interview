import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Interview from './Pages/Interview/Interview';
import StartInterview from './Pages/Interview/StartInterview';
import Feedback from './Pages/Interview/Feedback';
import LoginPopup from './components/LoginPopUp/LoginPopup';
import Protected from './components/Protected/Protected';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Header setShowLogin={setShowLogin}/>
    <Routes>
      <Route path="/" element={<Protected Component={Home}></Protected>}>
      <Route path="/dashboard"element={<Dashboard />}/>
      <Route path="/dashboard/interview/:mockId" element={<Interview/>}/>
      <Route path="/dashboard/interview/:mockId/start" element={<StartInterview/>}/>
      <Route path="/dashboard/interview/:mockId/feedback" element={<Feedback/>}/>
      </Route>


    </Routes>
    </>
  );
};

export default App;
