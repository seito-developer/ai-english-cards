import { Layout } from '@/layout/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function SignupFromMail() {

  const handleClick = () => {}

  return (
    <Layout>
      <form action="">
        <h1>サインアップ</h1>
        <legend>
          Email: <input type="email" />
        </legend>
        <legend>
          ユーザー名: <input type="text" />
        </legend>
        <legend>
          Password: <input type="password" />
        </legend>
        <button type='button' onClick={() => handleClick()}>登録を完了</button>
        <div>
          <Link href={'/'}>ログインページ</Link>
        </div>
      </form>
    </Layout>
  )
}
