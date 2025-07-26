import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <button className='hover:text-darkColor hoverEffect text-lightColor cursor-pointer text-sm font-semibold'>
        Login
      </button>
    </SignInButton>
  )
}
export default SignIn
