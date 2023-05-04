import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopBarWide from './page/landing/components/top-bar-wide/top-bar-wide'
import BnbTypeList from './page/landing/components/bnb-type-list/bnb-type-list'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ padding: 10 }}>
      <TopBarWide />
      <BnbTypeList />
    </div>
  )
}
