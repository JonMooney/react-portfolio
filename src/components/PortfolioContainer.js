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

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}

      {renderPage()}

      <Footer />
    </div>
  )

}
