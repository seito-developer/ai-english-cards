import React, { Component, useState } from 'react'
// import cardStyles from '/'
import styles from '@/components/Card/Card.module.scss'
// import ICard from '@/components/Card/Card'

export interface IDeck {
  id: number
  name: string
  cards: object[]
};

export default function Deck(params: IDeck) {

  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    (active) ? setActive(false) : setActive(true)
  }

  return (
    <div className={`${styles.deck} + ${(active) ? styles.isReversed : ''}`} onClick={handleClick}>
      <p>{ params.name }</p>
      <p>Card numbers: { params.cards.length}</p>
    </div>
  )
}