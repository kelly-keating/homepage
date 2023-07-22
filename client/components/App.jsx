import React from 'react'
import Grid from 'retro-neon-grid-react'

import Nav from './Nav'
import Experience from './Experience'
import Projects from './Projects'

function App() {
  return (
    <>
      <Nav />
      <Grid angle={10} spacing={4} top={-10} gap={10} linearY={true} />
      <section className='body__container'>
        {/* <Experience /> */}
        <Projects />
      </section>
    </>
  )
}

export default App
