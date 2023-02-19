import React, { Component, useState, useEffect } from 'react'
import styles from '@/components/DeckController/DeckController.module.scss'
import { decks } from '@/dummy-data/decks'
import Deck from '@/components/Deck/Deck'

export default function DeckController() {

  return (
    <div className={styles.deckController}>
      <ul className={styles.deckController__list}>
        { decks.map((item, i) => {
          return (
            <li key={i}>
              <Deck {...item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}