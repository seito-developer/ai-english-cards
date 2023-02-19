import React, { Component, useState } from 'react'
// import cardStyles from '/'
import styles from '@/components/Deck/Deck.module.scss'
import Link from 'next/link'
// import ICard from '@/components/Card/Card'

export interface IDeck {
  id: number
  name: string
  cards: object[]
};

export default function Deck(params: IDeck) {

  return (
    <div className={styles.deck}>
      <Link href={'/cards'}>
        <div className={styles.deck__inner}>
          <p className={styles.deck__heading}>{ params.name }</p>
          <p className={styles.deck__num}>Card numbers: { params.cards.length}</p>
        </div>
      </Link> 
    </div>
  )
}