import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Headshot({ currentPage, handlePageChange }) {
  return (
    <section className="center">
        <img className="headshot" src="./images/headshot2.jpg" height="230" alt="Headshot of Jon Mooney" />
        <h1 className="name-text">
            Jon Mooney
        </h1>
        
        <div className="role-wrapper">
            <div className="role-tag">
                Full Stack Web Developer
            </div>
        </div>
    </section>
  )
}

export default Headshot;