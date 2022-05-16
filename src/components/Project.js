import React, { useEffect} from 'react';

export default function Project({data}) {
    const { title, image, alt, description, bullets, githubLink, deployedLink } = data;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <>
        <h3>{title}</h3>
        
        <a href={githubLink} target="_blank" title="View the GitHub page">
            <img src={process.env.PUBLIC_URL + "/images/" + image} alt={alt} />&nbsp;&nbsp;
        </a>
        
        <p>{description}</p>
        
        <ul>
            {bullets.map((bullet, key) => {
                return <li key={key}>{bullet}</li>
            })}
        </ul>
            
        <a className="button" href={githubLink} target="_blank" title="View the GitHub page">View on GitHub</a>&nbsp;&nbsp;
        {deployedLink ? <a className="button" href={deployedLink} target="_blank" title="View deployed app">View the deployed app</a> : '' }
        </>
    )
}