import React, { Component, useState } from 'react'
// import cardStyles from '/'
import styles from '@/components/Card.module.scss'

export interface ICard {
  id: number
  wordEn: string
  wordJa: string
  exampleEn: string
  exampleJa: string
  voiceEn: any
  voiceJa: any
  imgUrl: string
};

export default function Card(params: ICard) {

  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    (active) ? setActive(false) : setActive(true)
  }

  return (
    <div className={`${styles.card} + ${(active) ? styles.isReversed : ''}`} onClick={handleClick}>
      <div className={styles.card__head}>
        <div className={styles.card__word}>{params.exampleEn}</div>
        <div className={styles.card__example}>♫ {params.exampleEn}</div>
        <div className={styles.card__voice}>♫</div>
        {/* <div className={styles.card__image}>
              <img src="https://dummyimage.com/600x400/000/fff" alt="" />
          </div> */}
      </div>
      <div className={styles.card__tail}>
        <div className={styles.card__word}>{params.wordJa}</div>
        <div className={styles.card__example}>♫ {params.exampleJa}</div>
        <div className={styles.card__voice}>♫</div>
      </div>
    </div>
  )
}