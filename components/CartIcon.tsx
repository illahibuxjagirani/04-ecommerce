import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className=' flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect'>
      <ShoppingBag className='text-darkBlue w-6 h-6'/>

<div className='flex flex-col'>

  <p className='flex text-xs gap-1'>
    <span className='font-semibold'>0</span>
 <span>items</span>
  </p>
  <p className='font-semibold'>Cart</p>

</div>
    </Link>
  )
}

export default CartIcon