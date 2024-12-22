import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Basket = () => {
  return (
    <Link href="/order" className=' flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect'>
      <ShoppingBasket className='text-darkBlue w-6 h-6'/>

<div className='flex flex-col'>

  <p className='flex text-xs gap-1'>
    <span className='font-semibold'>0</span>
 <span>items</span>
  </p>
  <p className='font-semibold'>Orders</p>

</div>
    </Link>
  )
}

export default Basket