import React from 'react'
import cls from './GoodItem.module.scss'

const GoodItem = ({
    abv,
    volume: {
        unit,
        value,
    },
    description,
    id,
    image_url,
    name,
}) => {
  return (
    <div 
        className={cls.card}
        onClick={() => console.log(id) }
    >
        <div className={cls.cardHead}>
            <img src={image_url} alt={name} className={cls.image} />
        </div>
        <div className={cardBody}>
            <div className={cls.name}>Name: {name}</div>
            <div className={cls.description}>Description: {description}</div>
            <div className={cls.volume}>Volume: {value} {unit} </div>
            <div className={cls.abv}>Alcohol by Volume: {abv} </div>
        </div>
      
    </div>
  )
}

export default GoodItem
