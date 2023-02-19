import { Layout } from '@/layout/Layout'
import CardController from '@/components/CardController/CardController'
import Link from 'next/link'

export default function Cards() {
  return (
    <Layout>
      <>
        <CardController />
        <Link href="/decks">デッキ一覧へ</Link>
      </>
    </Layout >
  )
}
