import React, {useEffect, useState} from 'react';
// Import helper function for email validation
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // Scroll to top fix when changing components
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either username, email, or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage('Name, email, or comment is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    
    alert(`Thanks for reaching out ${userName}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="row row-gray marg-top-40">
        <section className="content">
            <div className="heading">GET IN TOUCH</div>

            <p style={{maxWidth:900}}>
                Need a copy of my resume? Want to build something amazing together?
            </p>
            <p>
                Call/text @ 916.583.1455
            </p>
            
            <p>
                Email @ <a href="mailto:jon.mooney@yahoo.com">jon.mooney@yahoo.com</a>
            </p>
            
            <p>
                Or, fill out the form below and I'll get back to you as soon as possible!
            </p>
            
            <form id="contact-form" className="contact-form">
                <label htmlFor="userName">Name</label>
                <input
                  value={userName}
                  type="text"
                  name="userName"
                  placeholder="Name"
                  onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  type="text"
                  name="email"
                  placeholder="Email" 
                  onChange={handleInputChange}
                />

                <label htmlFor="message">Comment</label>
                <textarea 
                  value={message}
                  name="message"
                  placeholder="Message"
                  onChange={handleInputChange}
                />
            </form>

            <input type="button" onClick={handleFormSubmit} className="button" value="Send" />
            
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
        </section>
      </div>  
  );
}
