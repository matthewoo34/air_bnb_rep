'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopBarWide from './page/landing/components/top-bar-wide/top-bar-wide'
import BnbTypeList from './page/landing/components/bnb-type-list/bnb-type-list'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallScreen } from './helper/responsive-size';
import { useMediaQuery } from 'react-responsive';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 744px)'
  })

  return (
    <div style={{ padding: 10 }}>
      {
        isDesktopOrLaptop ?
          <TopBarWide />
          :
          <div></div>
      }
      <BnbTypeList />
    </div>
  )
}
