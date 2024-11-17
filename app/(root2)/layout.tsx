
import MobileNav2 from "@/components/MobileNav2";
import Nav from "@/components/Nav";
import Sidebar2 from "@/components/Sidebar2";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn={firstName:"Sri",lastName:"Vardhan"};

  return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar2 user={loggedIn}/>
        <div className="flex size-full flex-col">
        <div><Nav></Nav></div>
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo"
              width={150}
              height={150}
            ></Image>
            <div>
              <MobileNav2 user={loggedIn}></MobileNav2>
            </div>
          </div>
          {children} 
        </div>
        
      </main>
  );
}
