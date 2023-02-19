import { Layout } from '@/layout/Layout'
import Card, { ICard } from '@/components/Card/Card'
import { cards } from '@/dummy-data/cards'
import styles from '@/pages/cards.module.scss'
import CardController from '@/components/CardController/CardController'

export default function Cards() {
  return (
    <Layout>
      <CardController />
    </Layout >
  )
}
