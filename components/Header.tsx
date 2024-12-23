import Image from "next/image";
import { assets } from "./assets";
import Link from "next/link";
import Container from "./Container";
import Form from 'next/form'
import CartIcon from "./CartIcon";
import Basket from "./Basket";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default async function Header() {
  const user = await currentUser()
  // console.log(user)

  return (
    <header className="w-full bg-white py-2 border-b border-gray-400">

<Container className="flex items-center justify-between gap-5">

      {/* logo */}
      <Link href={"/"} className="hover:animate-pulse">
        <Image className=" w-24" src={assets.logo} alt="Logo" />
      </Link>


      {/* input */}
    <Form action="/search" className="flex-1 ">
      <input 
      className="w-full outline-none border-2 border-gray-200 px-4 py-2 rounded-md focus-visible:border-darkBlue cursor-pointer"
      type="text" name="query" id="" placeholder="Search for Product" />
      
    </Form>

      {/* tabs */}

<div className="flex items-center gap-3">
  <CartIcon />

  <ClerkLoaded>
   
<SignedIn>

  <Basket/>
</SignedIn>
   
   {user ? <div className=" flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect cursor-pointer">
    <UserButton />
    <div className="flex flex-col">
        <p className="text-xs">
          Welcome Back
        </p>
        <p className="font-semibold">{user?.firstName}</p>
      </div>
    </div> : 
   <SignInButton mode="modal">

    <div  className=" flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect cursor-pointer">
      <User className="h-6 w-6 text-darkBlue" />
      <div className="flex flex-col">
        <p className="text-xs">
          Account
        </p>
        <p className="font-semibold">Login</p>
      </div>
    </div>
    
    </SignInButton>}

  </ClerkLoaded>
</div>

</Container>

    </header>
  );
}
