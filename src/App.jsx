import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ExerciseDetail from './pages/ExerciseDetail.jsx'
import WorkoutsPages from './pages/WorkoutsPage.jsx';
import ExercisesPage from './pages/ExercisesPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import DietPage from './pages/DietPage.jsx'


const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488'}}} m="auto">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />}  />
          <Route path='/workouts' element={<WorkoutsPages />} />
          <Route path='/exercisepage' element={<ExercisesPage />} />
          <Route path='/articlepage' element={<ArticlePage />} />
          <Route path='/dietspage' element={<DietPage />} />
        </Routes>
      <Footer />
    </Box>
  );
};

export default App;