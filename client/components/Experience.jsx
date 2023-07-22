import React from 'react'

import data from '../data/experience'

function Experience() {
  return (
    <section className='exp'>
      <header className='exp__title_container'>
        <img src='/images/wizard_left.gif' />
        <div className='exp__title_box'>
          <h1>Things I've done</h1>
        </div>
        <img
          src='/images/wizard_left.gif'
          style={{ transform: 'scaleX(-1)' }}
        />
      </header>

      {data.map((obj) => (
        <section key={obj.title} className='exp__item'>
          <h2 className='exp__item_title'>{obj.title}</h2>
          <p className='exp__item_period'>{obj.period}</p>
          <article className='exp__item_body'>
            {obj.text.map((p) => (
              <p>{p}</p>
            ))}
          </article>
        </section>
      ))}
    </section>
  )
}

export default Experience
