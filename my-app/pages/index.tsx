import { Layout } from '@/layout/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <form action="">
        <h1>ログイン</h1>
        <legend>
          Email: <input type="email" />
        </legend>
        <legend>
          Password: <input type="password" />
        </legend>
        <button type='button'>ログイン</button>
        <div>
          <Link href={'/signup'}>アカウント新規作成</Link>
        </div>
      </form>
    </Layout>
  )
}
