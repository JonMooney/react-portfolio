import React, {useEffect} from 'react';

export default function Skills() {

  // Scroll to top fix when changing components
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <div className="row row-gray marg-top-40" id="skills">
        <section className="content">
            <div className="heading">SKILLS</div>

            <p className="center" style={{fontWeight:'400'}}>
                Here are the skills and technologies that I utilize to help your web applications stand out:
            </p>
            
            <div className="flex-box marg-top-30">
                <div className="skill-container">
                    <i className="devicon devicon-html5-plain"></i>
                    <p>HTML5</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-javascript-plain"></i>
                    <p>Vanilla JS</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/es6.png"} />
                    <p>ES6</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-jquery-plain"></i>
                    <p>jQuery</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-nodejs-plain"></i>
                    <p>Node.js</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-express-original"></i>
                    <p>Express</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/oop.png"} />
                    <p>OOP</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/css.png"} />
                    <p>CSS</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-bootstrap-plain"></i>
                    <p>Bootstrap</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-git-plain"></i>
                    <p>Git</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-github-plain"></i>
                    <p>GitHub</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-bash-plain"></i>
                    <p>Git Bash / Terminal</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-photoshop-plain"></i>
                    <p>Photoshop</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-visualstudio-plain"></i>
                    <p>VS Code</p>
                </div>

                <div className="skill-container">
                    <i className="devicon devicon-microsoftsqlserver-plain"></i>
                    <p>SQL Server</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/responsive.svg"} />
                    <p>Responsive Design</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/excel-icon.png"} />
                    <p>Excel</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/xml.png"} />
                    <p>XML/XSLT</p>
                </div>

                <div className="skill-container">
                    <img className="skill-icon" src={process.env.PUBLIC_URL + "/images/w3c-icon.svg"} />
                    <p>Web Accessibility</p>
                </div>
            </div>
        </section>    
    </div>
  );
}