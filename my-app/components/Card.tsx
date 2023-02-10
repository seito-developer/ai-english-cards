import React, { Component } from 'react'
// import cardStyles from '/'
import styles from '@/components/Card.module.scss'

type Props = {}

type State = {}

export default class Card extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.card}>
        <div className="card__head">
            <div className="card__word">dog</div>
            <div className="card__example">♫ This is a dog</div>
            <div className="card__voice">♫</div>
            <div className="card__image">
                <img src="https://dummyimage.com/600x400/000/fff" alt="" />
            </div>
        </div>
        <div className="card__tail">
            <div className="card__word">犬</div>
            <div className="card__example">♫ 彼は犬です</div>
            <div className="card__voice">♫</div>
        </div>
      </div>
    )
  }
}