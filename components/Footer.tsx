import { catergoriesData, quickLinksData } from '@/constants'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './ui/text'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='border-t bg-white'>
      <Container>
        <FooterTop />
        <div className='grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Logo />
            <SubText>
              Discover curated furniture collections at JontroGhor, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className='text-darkColor/60'
              iconClassName='border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green'
              tooltipClassName='bg-darkColor text-white'
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className='mt-4 space-y-2'>
              {quickLinksData?.map(item => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className='hover:text-shop_light_green hoverEffect text-sm font-medium'
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Catergories</SubTitle>
            <ul className='mt-4 space-y-2'>
              {catergoriesData?.map(item => (
                <li key={item?.title}>
                  <Link
                    href={`/catergory/${item?.href}`}
                    className='hover:text-shop_light_green hoverEffect text-sm font-medium'
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to recieve updates and exclusive
              offers
            </SubText>
            <form className='space-y-3'>
              <Input placeholder='Enter your email' type='email' required />
              <Button className='w-full'>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className='border-t py-6 text-center text-sm text-gray-600'>
          <div>
            &copy; {new Date().getFullYear()}&nbsp;
            <Logo className='text-sm' />. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
