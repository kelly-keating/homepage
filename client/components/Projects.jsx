import React from 'react'

import data from '../data/projects'

function Projects() {
  return (
    <section className='projects'>
      <img />
      <header>
        <h1>Projects</h1>
      </header>
      <div>
        {data.map((project) => (
          <div>
            <img src={project.img} />
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
