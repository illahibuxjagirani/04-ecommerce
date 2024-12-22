import Image from "next/image";
import { assets } from "./assets";
import Link from "next/link";
import Container from "./Container";
import Form from 'next/form'
import CartIcon from "./CartIcon";
import Basket from "./Basket";

export default function Header() {
  return (
    <header className="w-full bg-white py-2 border-b border-gray-400">

<Container className="flex items-center justify-between gap-5">

      {/* logo */}
      <Link href={"/"} className="animate-pulse">
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
  <Basket/>
  <p>Account</p>
</div>

</Container>

    </header>
  );
}
