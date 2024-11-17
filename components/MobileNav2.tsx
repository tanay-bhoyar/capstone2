'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const MobileNav2 = ({ user }: SidebarProps) => {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white">
          {/* Accessibility: Add a visually hidden title */}
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
            <h2 className="sidebar-heading">
              Hello, {user.firstName} {user.lastName}
            </h2>
            <p className="sidebar-subheading">Happy to see you here!</p>
            
            <Link
              href="/jobs-applied"
              key="home2"
              className="sidebar-link border-pageGradient border-2"
            >
              <div>VIT-AP Home Page</div>
            </Link>
            <Link
              href="/post-job"
              key="post-job"
              className="sidebar-link sidebar-link-active"
            >
              <div>Post Jobs</div>
            </Link>
            <Link href="/current-jobs" key="home" className="sidebar-link">
              <div>Home</div>
            </Link>
            <Link
              href="/Personal-Information"
              key="Apply"
              className="sidebar-link"
            >
              <div>Apply Jobs</div>
            </Link>
            <Link href="/current-jobs" key="contact" className="sidebar-link">
              <div>Contact Us</div>
            </Link>
            <Link
              href="/current-jobs"
              key="current-jobs"
              className="sidebar-link bg-pink-1"
            >
              <div>Current Jobs</div>
            </Link>
            <Link
              href="/past-jobs"
              key="past-jobs"
              className="sidebar-link bg-pink-1"
            >
              <div>Past Jobs</div>
            </Link>
            <Link
              href="/"
              key="Logout"
              className={cn(
                "sidebar-link",
                pathName === "/" && "sidebar-link-active"
              )}
            >
              <div>Log-out</div>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav2;
