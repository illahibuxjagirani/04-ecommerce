import Image from "next/image";
import { assets } from "./assets";
import Link from "next/link";

export default function Header(){
  return(
    <div className="w-full">
      {/* logo */}
<Link href={'/'}> 
    <Image 
    className="h-10 w-24"
    src={assets.logo} alt="Logo"/>
    </Link>

      {/* input */}

      {/* tabs */}
      
    </div>
  )
}