import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.title}</p>
    </div>


)

export default Card