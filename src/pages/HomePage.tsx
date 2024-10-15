const HomePage = () => {
  return (
    <div className='main'>
        <div id='profile-fixed'>
                <h1>Tom Tutone</h1>
                <h2>Junior Full Stack Developer</h2>
                <p id='bio-desc'>
                    I'm a full stack developer who loves creative challenges and learning new skills.
                </p>
        </div>
        
        <div className='body'>           
            <div className='section-heading' id='about'>
                <img src='/profile-pics/tt-portrait-2.jpg' id='tt-pic'/>
                <h2>About</h2>
                <p>
                    I have recently completed a Diploma of Information Technology where I gained comprehensive skills creating full stack applications.
                </p>
                <p>
                    I am proficient using React, Javascript and Typescript within a Vite framework and have a deep understanding of how
                    the DOM, JS objects and component lifecycles can be best structured to create responsive and fast-loading webpages.
                </p>
                <p>
                    I also enjoy working with data and APIs. As part of my studies, I created a user database for a MERN stack veterinary website as well as a RESTful API for a childcare management application using Flask and PostgreSQL.
                </p>
            </div>

            <div id='experience'>
                <h2 className='section-heading'>Experience</h2>
                <div className='experience-grid'>
                    <div className='experience-label'>
                        <h3>
                            2024
                        </h3>
                    </div>
                    <div className='experience-desc'>
                        <h3>Diploma of Information Technology</h3>
                        <p>
                            <em>Coder Academy</em>
                        </p>
                    </div>
                </div>

                <div className='experience-grid'>
                    <div className='experience-label'>
                        <h3>
                            2023
                        </h3>
                    </div>
                    <div className='experience-desc'>
                        <h3>Responsive Web Design Certificate</h3>
                        <p>
                            <em>freeCodeCamp</em>
                        </p>
                    </div>
                </div>

                <div className='experience-grid'>
                    <div className='experience-label'>
                        <h3>
                            2021
                        </h3>
                    </div>
                    <div className='experience-desc'>
                        <h3>Bachelor of Film and Television Honours</h3>
                        <p>
                            <em>Swinburne University</em>
                        </p>
                        <p>Graduated with First Class Honours</p>
                    </div>
                </div>

            </div>

            
                
                <h2 className='section-heading'>Key Projects</h2>
                <div id='projects'>
                <div className='project'>
                    <div className='project-label'>
                        <h3>
                            <em>Pawfect Care</em> MERN Stack Application
                        </h3>
                        <p>
                            <a href='https://github.com/tthecoder15/T3A2-MERN-App/tree/main/T3A2-B' target='_blank'><em>Github Repo</em></a>
                        </p>
                    </div>
                    <div className='project-desc'>
                        <p>Veterinary clinic web application with user, pet and appointment registration.</p>
                        <p>Designed and implemented back end using Express with thorough validation.</p>
                        <p>Created appointment booking form including dynamic time buttons.</p>
                    </div>
                    <div className='proj-ss-cont'>
                        <a href='https://pawfect-care.netlify.app/' target='_blank'>
                            <img className='proj-ss' src='/project-ss/pc-3-booking-form.png'/>
                        </a>
                    </div>
                    <div className="skills">
                        <h5>React</h5><h5>Javascript</h5><h5>Vite</h5><h5>Node.js</h5><h5>Express</h5><h5>MongoDB</h5><h5>Jest</h5>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-label'>
                        <h3>
                            Childcare Management API
                        </h3>
                        <p>
                            <a href='https://github.com/tthecoder15/T2A2-API-Webserver' target='_blank'><em>Github Repo</em></a>
                        </p>
                    </div>
                    <div className='project-desc'>
                        <p>API and database project for a Childcare service.</p>
                        <p>Provides functionality required to faciliate communication between parents and educators.</p>
                        <p>Contains user and admin validation, child, attendance, comments, pick-up contact registration.</p>
                    </div>
                    <div className='proj-ss-cont'>
                        <a href='https://github.com/tthecoder15/T2A2-API-Webserver#r8-explain-how-to-use-this-applications-api-endpoints-each-endpoint-should-be-explained-including-the-following-data-for-each-endpoint-6' target='_blank'>
                            <img className='proj-ss' src='/project-ss/ct-1-post-comment.png'/>
                        </a>
                    </div>
                    <div className="skills">
                        <h5>Python</h5><h5>Flask</h5><h5>PostgreSQL</h5><h5>SQLAlchemy</h5><h5>marshmallow</h5><h5>JWT</h5>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-label'>
                        <h3>
                            Pokémon Card Search Engine
                        </h3>
                        <p>
                            <a href='https://github.com/tthecoder15/pkmn-tech-search-v2/tree/main' target='_blank'><em>Github Repo</em></a>
                        </p>
                    </div>
                    <div className='project-desc'>
                        <p>A fan-made search engine to filter Pokémon cards based on their attributes.</p>
                        <p>Handles data from public API <a href='https://pokemontcg.io/' target='_blank'>Pokemon TCG API</a>.</p>
                    </div>
                    <div className='proj-ss-cont'>
                        <a href='https://pokemon-tech-search.netlify.app/search' target='_blank'>
                            <img className='proj-ss' src='/project-ss/pts-search-2.png'/>
                        </a>
                    </div>
                    <div className="skills">
                        <h5>React</h5><h5>Javascript</h5><h5>Vite</h5>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-label'>
                        <h3>
                            CLI Guessing Game
                        </h3>
                        <p>
                            <a href='https://github.com/tthecoder15/Pokemon-Card-Guessing-Game-CLI-Application' target='_blank'><em>Github Repo</em></a>
                        </p>
                    </div>
                    <div className='project-desc'>
                        <p>A terminal game where players are presented with clues and must guess a mystery Pokémon card from the original six expansions.</p>
                        <p>Features score saving and scoreboard functionality as well as a standard and hard mode.</p>
                    </div>
                    <div className='proj-ss-cont'>
                        <a href='https://github.com/tthecoder15/Pokemon-Card-Guessing-Game-CLI-Application?tab=readme-ov-file#help' target='_blank'>
                            <img className='proj-ss' src='/project-ss/cli-2-correct-guess.png'/>
                        </a>
                    </div>
                    <div className="skills">
                        <h5>Python</h5><h5>pytest</h5>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HomePage