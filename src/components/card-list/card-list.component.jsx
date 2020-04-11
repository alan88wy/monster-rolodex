import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component';

export const CardList = props => {
  return (
    <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.key} monster={monster} />
    ))}
    </div>
  )
};

{/*

  Can also declare this way:

  export const CardList = props => (

    <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.key} monster={monster} />
    ))}
    </div>

);

or

export const CardList = function(props) {
  return (
    <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.key} monster={monster} />
    ))}
    </div>
  )
};

*/}
