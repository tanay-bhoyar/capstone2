import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Sidebar2 = ({user}:SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
        <Image src="/icons/logo.svg" alt="logo"
              width={150}
              height={150}
            ></Image>
        </Link>
        <h2 className='sidebar-heading'>Hello,{user.firstName} {user.lastName}</h2>
        <p className='sidebar-subheading'>Happy to see you here!</p>
        <Link href="/post-job"
                    key="post-job" className="sidebar-link sidebar-link-active">
                        <div>
                            Post Jobs
                        </div>
                    </Link>
                    <Link href="/current-jobs"
                    key="current-jobs" className="sidebar-link bg-pink-1">
                        <div>
                            Current Jobs
                        </div>
                    </Link>
                    <Link href="/past-jobs"
                    key="past-jobs" className="sidebar-link bg-pink-1">
                        <div>
                            Past Jobs
                        </div>
                    </Link>
      </nav>
    </section>
  )
}

export default Sidebar2