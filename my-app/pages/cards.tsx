import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Layout } from '@/layout/Layout'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Cards() {
  return (
    <Layout>
        <Card></Card>
    </Layout>
  )
}
