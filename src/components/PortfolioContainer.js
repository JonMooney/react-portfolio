import React, { useEffect, useState } from 'react';
/* High Level Components */
import HeaderNav from './HeaderNav';
import Footer from './Footer'


/* Page Components */
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { Routes, Route, Link } from "react-router-dom";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   if (currentPage === 'Skills') {
  //     return <Skills />;
  //   }
  //   if (currentPage === 'Experience') {
  //     return <Experience />;
  //   }
  //   return <Contact />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange}  />

      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<About />} />
      </Routes>
      
      {/* {renderPage()} */}

      <Footer />
    </div>
  )

}
