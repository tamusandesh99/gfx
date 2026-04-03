import React from 'react'
import './index.scss'

const players = [
  {
    name: 'RASYAH',
    event: 'ESPORTS WORLD CUP 2025',
    tag: 'EWC',
    age: 16,
    img: 'https://via.placeholder.com/120',
    top: true
  },
  {
    name: 'BOPS',
    event: 'FFWS GF 2024 BRAZIL',
    tag: 'WORLD SERIES',
    age: 19,
    img: 'https://via.placeholder.com/120'
  },
  {
    name: 'MOSH',
    event: 'ESPORTS WORLD CUP 2024',
    tag: 'EWC',
    age: 19,
    img: 'https://via.placeholder.com/120'
  },
  {
    name: 'DEW',
    event: 'FFWS 2023',
    tag: 'WORLD SERIES',
    age: 17,
    img: 'https://via.placeholder.com/120'
  }
]

const MVP = () => {
  return (
    <div className="mvp">
      <div className="mvp__card">
        <h1 className="mvp__title">MVP LIST</h1>
        <div className="mvp__subtitle">INTERNATIONAL TOURNAMENT FREE FIRE</div>

        {players.map((p, i) => (
          <div className={`mvp__row ${p.top ? 'top' : ''}`} key={i}>
            
            {/* LEFT IMAGE */}
            <div className="left">
              <img src={p.img} alt="" />
              <div className="name">{p.name}</div>
            </div>

            {/* CENTER */}
            <div className="middle">
              <div className="event-tag">EVENT</div>
              <div className="event-box">
                <strong>{p.tag}</strong>
                <p>{p.event}</p>
              </div>
            </div>

            {/* RIGHT AGE */}
            <div className="right">
              <div className="age">{p.age}</div>
              <span>TAHUN</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MVP