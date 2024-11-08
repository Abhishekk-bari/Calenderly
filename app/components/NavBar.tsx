import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/Logo-N.png'
import AuthModel from '@/app/components/AuthModel'
// import { Button } from "@/components/ui/button"



export default function Navbar() {
  return (
    <div className="flex item-center justify-between py-5">
        <Link href="/" className='flex items-center gap-3'>
        <Image className='size-10'
        src={Logo} 
        alt="Logo"/>
        <h4 className="font-semibold text-xl">Cal<span className='text-violet-600'>Enderly</span></h4>
        </Link>
        <AuthModel />

      
    </div>
  )
}
