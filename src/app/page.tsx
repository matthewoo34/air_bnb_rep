'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopBarWide from './page/landing/components/top-bar-wide/top-bar-wide'
import BnbTypeList from './page/landing/components/bnb-type-list/bnb-type-list'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallScreen } from './helper/responsive-size';
import { useMediaQuery } from 'react-responsive';
import TopBarNarrow from './page/landing/components/top-bar-narrow/top-bar-narrow'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import ListCard from './page/landing/components/list-card/list-card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 744px)'
  })

  const data = [
    {
      location: 'Milan, Italy',
      description: 'Stay with Valentina。Interior designer',
      duration: '5 nights . Jul 17 - 22',
      costs: '$4,079 HKD',
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/80e077fa-8985-483e-9946-8c088fbd8e78.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/279e191e-784b-405f-9cfd-7ed9ce4010cf.jpeg?im_w=720',
      ],
      rating: 5.0,
    },
    {
      location: 'Surry Hills, Australia',
      description: 'Stay with Bron。Business owner',
      duration: '6 nights . Jul 26 - Aug 1',
      costs: '$4,994 HKD',
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/a0b3e1d3-2e64-421b-b021-98e1973f9cfe.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/5d2b6625-d4b8-45ee-8d40-c1322c77d7f4.jpg?im_w=720',
      ],
      rating: 4.92,
    },
    {
      location: 'Enghien-les-Bains, France',
      description: 'Stay with Joseph。Works in advertising',
      duration: '6 nights . Jul 24 - 30',
      costs: '$4,370 HKD',
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/53e611cc-b827-4cec-850e-c1db1274de43.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/f288503b-fdad-4113-85f1-513697bd2698.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/93d7e82d-3bf8-4236-87b2-27369f4ccbd4.jpeg?im_w=720',
      ],
      rating: 4.0,
    },
    {
      location: 'Lyon, France',
      description: 'Stay with Coach formateur',
      duration: '5 nights . Jun 30 - Jul 5',
      costs: '$4,079 HKD',
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/b325b883-9c3d-4dc4-91c4-ae5b03aa76ff.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/1d456613-b0cc-40d5-9ba3-9e9f83069084.jpeg?im_w=720',
      ],
      rating: 5.0,
    },
  ]

  return (
    <div>
      <div style={{
        padding: 10, paddingBottom: 0, boxShadow: '0 0px 8px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white'
      }}>
        {
          isDesktopOrLaptop ?
            <TopBarWide />
            :
            <TopBarNarrow />
        }
        <BnbTypeList />

      </div>
      <div style={{ padding: 10 }}>
        <ListCard
          data={data} />
      </div>
    </div>
  )
}
