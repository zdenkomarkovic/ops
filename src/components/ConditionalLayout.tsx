"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <FloatingShapes />
      </div>
      <div className="relative z-[2]">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
}
