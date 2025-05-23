import Image from "next/image";
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
     <div className="w-100 flex gap-x-5 justify-end">
      <UserButton/>
      <ThemeToggle/>
     </div>
     <h1 className='font-bold font-barlow'>MohammadReza Majed</h1>
     
    </div>
  );
}
