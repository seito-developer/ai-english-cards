import React, { Component, useState } from 'react'
// import cardStyles from '/'
import styles from '@/components/Modal/Modal.module.scss'
import Link from 'next/link'

export default function Modal() {

  return (
    <div className={styles.modal}>
      <div className={styles.modal__box}>
        <div className={styles.modal__inner}>
          <h1 className={styles.modal__heading}>Finish!</h1>
          <p className={styles.modal__text}>おつかれさまでした！</p>
          <Link href={"/"} className={styles.modal__link}>
            トップへもどる
          </Link>
        </div>
      </div>
    </div>
  )
}