import React from 'react'

const HomePage = () => {
  return (
    <div className='main'>
        <div id='profile-fixed'>
                <h1>Tom Tutone</h1>
                <h2>Junior Full Stack Developer</h2>
                <h4 id='bio-desc'>
                    I'm a full stack developer who loves creative challenges and learning new skills.
                </h4>
        </div>
        
        <div className='body'>
            <div id='about'>
                <img src='/tt-portrait-2.jpg' id='tt-pic'/>
                <h2>About</h2>
                <p>
                    I have recently completed a Diploma of Information Technology where I gained comprehensive skills creating full stack applications.
                </p>
                <p>
                    I am proficient using React, Javascript and Typescript within a Vite framework and have a deep understanding of how
                    the DOM, JS objects and component lifecycles can be best structured to create responsive and fast-loading webpages.
                </p>
                <p>
                    I am skilled at designing and implementing back end servers and APIs. As part of my studies, I have created a user database for a MERN stack veterinary website as well as a RESTful API for a childcare management application using Flask and PostgreSQL.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomePage