"use client";
import React from 'react'
import { useChangeLocale } from '@/locales/client'

function Navbar() {
  const changeLocale = useChangeLocale()

  return (
    <div className='flex gap-8 fixed top-0'>
      <div className='cursor-pointer' onClick={()=> changeLocale("it")}>
        IT
      </div>
      <div className='cursor-pointer' onClick={()=> changeLocale("en")}>
        EN
      </div>
    </div>
  )
}

export default Navbar