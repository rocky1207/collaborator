import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '@pages/About';
import Home from '@pages/Home';
import TestBB from '@pages/TestBB';
import TestSS from '@pages/TestSS';
import TestVS from '@pages/TestVS';
import TestSM from '@pages/TestSM';
import Header from '@components/Header/Header';
import LoginPage from '@pages/LoginPage';
import Timesheet from '@pages/Timesheet';
import TimesheetDetails from '@components/TimesheetDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/header" element={<Header />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testsm" element={<TestSM />} />
                <Route path="/testvs" element={<TestVS />} />
                <Route path="/testbb" element={<TestBB />} />
                <Route path="/testss" element={<TestSS />} />
                <Route path="/timesheet" element={<Timesheet />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/timesheetDetails"
                    element={<TimesheetDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
