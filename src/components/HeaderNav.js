import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <div className="header-wrapper">
        <nav>
          <ul>
            <li>
              {currentPage === 'About'
                ? 'About'
                : <a onClick={() => handlePageChange('About')} title="About Me">About</a>
              }
            </li>
            <li>
              {currentPage === 'Projects'
                ? 'Projects'
                : <a onClick={() => handlePageChange('Projects')} title="My Projects">Projects</a>
              } 
            </li>
            <li>
              {currentPage === 'Skills'
                ? 'Skills'
                : <a onClick={() => handlePageChange('Skills')} title="Skills">Skills</a>
              }
            </li>
            <li>
              {currentPage === 'Experience'
                ? 'Experience'
                : <a onClick={() => handlePageChange('Experience')} title="Experience">Experience</a>
              }
            </li>
            <li>
              {currentPage === 'Contact'
                ? 'Contact'
                : <a onClick={() => handlePageChange('Contact')} title="Contact">Contact</a>
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;
