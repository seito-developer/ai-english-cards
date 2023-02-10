import { Layout } from '@/layout/Layout'
import Card, { ICard } from '@/components/Card'
import { cards } from '@/dummy-data/cards'
import styles from '@/pages/cards.module.scss'

export default function Cards() {
  return (
    <Layout>
      <ul className={styles.cardList}>
      { cards.map(item => {
        return (
          <li key={item.id}>
            <Card {...item} />
          </li>
        )
      })}
      </ul>
    </Layout >
  )
}
