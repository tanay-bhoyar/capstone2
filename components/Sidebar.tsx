'use client'

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
    const pathName=usePathname();
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
        <Link href="/"
                    key="Dashboard" className="sidebar-link-active sidebar-link">
                        <div>
                            Dashboard
                        </div>
                    </Link>
        {sidebarLinks.map((item)=>
            {
                const isActive=pathName===item.route||pathName.startsWith(`${item.route}/`)
                return(
                    <Link href={item.route}
                    key={item.label} className={cn('sidebar-link',{'sidebar-link':isActive})}>
                        <div>
                            {item.label}
                        </div>
                    </Link>
                )
            }
        )}
        <Link href="/"
                    key="Dashboard2" className="sidebar-link border-pageGradient border-2">
                        <div>
                            Jobs you applied
                        </div>
                    </Link>

      </nav>
    </section>
  );
};

export default Sidebar;
