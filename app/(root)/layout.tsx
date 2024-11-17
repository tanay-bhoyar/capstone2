import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn={firstName:"Sri",lastName:"Vardhan"};

  return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo"
              width={150}
              height={150}
            ></Image>
            <div>
              <MobileNav user={loggedIn}></MobileNav>
            </div>
          </div>
          {children} 
        </div>
        
      </main>
  );
}
