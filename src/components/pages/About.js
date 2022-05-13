import React, {useEffect} from 'react';
import Headshot from '../Headshot'

export default function About() {
    
    // Scroll to top fix when changing components
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <Headshot />

        <div className="row row-gray marg-top-20">
            <section className="content">
                <div className="heading">ABOUT ME</div>

                <p className="about-name">Hi, I'm Jon Mooney</p>

                <p>
                    I am a front end developer located in the Sacramento, CA area. I have 10+ years of experience using technologies such as HTML, CSS, JavaScript, XML, and Photoshop. The majority of my professional experience was working with Hewlett Packard Enterprise on various high-visibility projects.
                </p>

                <p>
                    I have been interested in programming since early childhood and remember batch programming in DOS when I was pretty young. I am very familiar with computers and technology and have a passion for solving complex problems. I also have a good eye for design.
                </p>
                
                <p>
                    I'm currently enrolled in the UC Davis coding boot camp to keep up-to-date in my skills.
                </p>

                <p>
                    In my free time I enjoy building and modifying computers, enjoying classic games, and going on family trips with my wife and 3 kids. I also have a 1971 Nova project car that I like to tinker on. Anything that keeps my brain going is fun.
                </p>

                <p>
                    Check me out on <a href="https://www.linkedin.com/in/jon-mooney-59972b69/" target="_blank">LinkedIN</a>, and <a href="https://github.com/JonMooney/" target="_blank">GitHub</a>
                </p>
            </section>
        </div>
        </>
    );
}
