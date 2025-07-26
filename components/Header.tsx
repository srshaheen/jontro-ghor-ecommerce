import { currentUser } from '@clerk/nextjs/server'
import CartIcon from './CartIcon'
import Container from './Container'
import FavoriteButton from './FavoriteButton'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import SignIn from './SignIn'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async () => {
  const user = await currentUser()
  return (
    <header className='border-b border-b-black/20 bg-white py-5'>
      <Container className='text-lightColor flex items-center justify-between'>
        <div className='flex w-auto items-center justify-start gap-2.5 md:w-1/3 md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='flex w-auto items-center justify-end gap-5 md:w-1/3'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
        {/* navAdmin */}
      </Container>
    </header>
  )
}
export default Header
