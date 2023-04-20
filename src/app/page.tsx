import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopBarWide from './page/landing/components/top-bar-wide/top-bar-wide'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ padding: 10 }}>
      <TopBarWide />
    </div>
  )
}
