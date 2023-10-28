import React, { useState } from 'react';
import HomePage from './components/HomePage';
import FacultyPage from './components/FacultyPage';
import FacultyDetail from './components/FacultyDetail';
import LabPage from './components/LabPage';
import ClassPage from './components/ClassPage';
import NavBar from './components/NavBar';
import BlockA from './components/BlockA';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const navigateTo = (page, facultyId = null) => {
    setCurrentPage(page);
    setSelectedFaculty(facultyId);
  };

  return (
    <div>
      <NavBar navigateTo={navigateTo} />
      {currentPage === 'blocka' && <BlockA navigateTo={navigateTo} />}
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'faculty' && (
        <FacultyPage navigateTo={navigateTo} />
      )}
      {currentPage === 'lab' && <LabPage />}
      {currentPage === 'class' && <ClassPage />}

      {currentPage === 'facultyDetail' && (
        <FacultyDetail facultyId={selectedFaculty} />
      )}
    </div>
  );
}

export default App;
