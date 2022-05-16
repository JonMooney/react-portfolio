import React from 'react';
import {Link} from 'react-router-dom'

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
                // : <a onClick={() => handlePageChange('About')} title="About Me">About</a>
                : <Link to="/" onClick={() => handlePageChange('About')} title="About Me">About</Link>
              }
            </li>
            <li>
              {currentPage === 'Projects'
                ? 'Projects'
                // : <a onClick={() => handlePageChange('Projects')} title="My Projects">Projects</a>
                : <Link to="/projects" onClick={() => handlePageChange('Projects')} title="My Projects">Projects</Link>
              } 
            </li>
            <li>
              {currentPage === 'Skills'
                ? 'Skills'
                // : <a onClick={() => handlePageChange('Skills')} title="Skills">Skills</a>
                : <Link to="/skills" onClick={() => handlePageChange('Skills')} title="Skills">Skills</Link>
              }
            </li>
            <li>
              {currentPage === 'Experience'
                ? 'Experience'
                // : <a onClick={() => handlePageChange('Experience')} title="Experience">Experience</a>
                : <Link to="/experience" onClick={() => handlePageChange('Experience')} title="Experience">Experience</Link>
              }
            </li>
            <li>
              {currentPage === 'Contact'
                ? 'Contact'
                // : <a onClick={() => handlePageChange('Contact')} title="Contact">Contact</a>
                : <Link to="/contact" onClick={() => handlePageChange('Contact')} title="Contact">Contact</Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;
