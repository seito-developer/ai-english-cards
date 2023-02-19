import { Layout } from '@/layout/Layout'
import styles from '@/pages/cards.module.scss'
import { decks } from '@/dummy-data/decks'
import DeckController from '@/components/DeckController/DeckController'

export default function Decks() {
  return (
    <Layout>
        <DeckController />
    </Layout >
  )
}
