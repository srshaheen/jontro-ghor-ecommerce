'use client'

import { AlignLeft } from 'lucide-react'
import SideMenu from './SideMenu'
import { useState } from 'react'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsSidebarOpen(prev => !prev)}>
        <AlignLeft className='hover:text-darkColor hoverEffect hover:cursor-pointer md:hidden' />
      </button>
      <div className='md:hidden'>
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  )
}
export default MobileMenu
