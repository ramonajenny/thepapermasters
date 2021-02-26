import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="" src={props.monster.image} width={"180"} />
        <h3> {props.monster.name} </h3>
        <div> {props.monster.email} </div>
    </div>
);
