'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { sidebarLinks } from "@/constants";
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
  
  const MobileNav = ({ user }: SidebarProps) => {
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
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              {/* Logo */}
              <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                <Image
                  src="/icons/logo.svg"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </Link>
  
              {/* Greeting */}
              <h2 className="sidebar-heading">
                Hello, {user.firstName} {user.lastName}
              </h2>
              <p className="sidebar-subheading">Happy to see you here!</p>
  
              {/* Dashboard Link */}
              <Link
                href="/jobs-applied"
                key="home"
                className="sidebar-link border-pageGradient border-2"
              >
                <div>VIT-AP Home Page</div>
              </Link>
              <Link
                href="/"
                key="Dashboard"
                className={cn(
                  "sidebar-link",
                  pathName === "/" && "sidebar-link-active"
                )}
              >
                <div>Dashboard</div>
              </Link>
  
              {/* Sidebar Links */}
              {sidebarLinks.map((item) => {
                const isActive =
                  pathName === item.route || pathName.startsWith(`${item.route}/`);
                return (
                  <Link
                    href={item.route}
                    key={item.label}
                    className={cn(
                      "sidebar-link",
                      isActive && "sidebar-link-active"
                    )}
                  >
                    <div>{item.label}</div>
                  </Link>
                );
              })}
  
              {/* Jobs Link */}
              <Link
                href="/jobs-applied"
                key="Jobs"
                className="sidebar-link border-pageGradient border-2"
              >
                <div>Jobs you applied</div>
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
  
  export default MobileNav;
  