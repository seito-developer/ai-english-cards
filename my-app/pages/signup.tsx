import { Layout } from '@/layout/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {

  const [alreadySent, setalreadySent] = useState<boolean>(false)

  const handleClick = () => {
    if(!alreadySent){
      setalreadySent(true)
    }
  }

  return (
    <Layout>
      <form action="">
        <h1>サインアップ</h1>
        <legend>
          Email: <input type="email" />
        </legend>
        <button type='button' onClick={() => handleClick()}>新規でアカウントを登録</button>
        <div>
          <Link href={'/'}>ログインページ</Link>
        </div>
        { (alreadySent) ? <p>メールをを送信しました。ご確認ください</p> : null }
      </form>
    </Layout>
  )
}
