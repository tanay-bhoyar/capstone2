import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='bg-white w-full h-full navele'>
        <Link href="/" className='navele'>
            <div>home</div>
        </Link>
        <Link href="/" className='sidebar-link'>
            <div>Apply Jobs</div>
        </Link>
        <Link href="/" className='sidebar-link'>
            <div>Contact Us</div>
        </Link>
      </div>
      <div className='bg-white justify-items-end w-full h-full navele2'>
        <div><Link href="/"
                    key="Dashboard2" className="navele2 border-pageGradient border-2">
                        <div>
                            Home Page
                        </div>
                    </Link>
                    </div>
                    <div>
                        <Link href="/"
                    key="logout" className="navele2 border-pageGradient border-2 sidebar-link-active">
                        <div className='text-white'>
                            Logout
                        </div>
                    </Link>
                    </div>
      
                    
      </div>
    </div>
  )
}

export default Nav
