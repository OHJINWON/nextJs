import Link from 'next/link'
import Image from 'next/image'
import puls from '/public/image/plus.png'
import './styles/page.scss'


export default function Home() {
  return (
    <div className='contents'>
      <div className='contents-box'>
        <Link href="/schedule">
            <div className='content__img'>
                <Image src={puls} alt="더하기 이미지"/>        
            </div>
            <div className='line'></div>
            <div className='content__title'>
                <span>상세 이름</span>
            </div>
        </Link>
      </div>  
    </div>
  )
}
