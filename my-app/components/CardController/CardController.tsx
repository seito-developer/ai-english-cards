import React, { Component, useState, useEffect } from 'react'
// import cardStyles from '/'
import Card from '@/components/Card/Card'
import { cards } from '@/dummy-data/cards'
import styles from '@/components/CardController/CardController.module.scss'
import cx from "classnames";

export default function CardController() {
  const [index, setIndex] = useState<number>(0)

  const itemLength = cards.length

  const increnmentIndex = () => {
    if(index === (itemLength - 1)) return
    setIndex(index + 1)
  }
  const decrementIndex = () => {
    if(index === 0) return
    setIndex(index - 1)
  }

  return (
    <div className={styles.cardController}>
      <h1>{ (index + 1) + "/" + cards.length}</h1>
        <div className={styles.cardController__direction}>
            <button type='button' onClick={() => increnmentIndex()}>覚えた！</button>
            <button type='button' onClick={() => increnmentIndex()}>むりぽ</button>
            <button type='button' onClick={() => increnmentIndex()}>5:5</button>
        </div>
        <div className={styles.cardController__back}>
          <button type='button' onClick={() => decrementIndex()}>Back</button>
        </div>
        <ul className={styles.cardController__list} id="js-index">
        { cards.map((item, i) => {
            return (
              <li key={i} className={cx((index==i) ? styles.isVisible : "" )}>
                  <Card {...item} />
              </li>
            )
        })}
        </ul>
    </div>
  )
}