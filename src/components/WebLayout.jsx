import React from 'react'

export default function WebLayout({children}) {
  return (
    <div className='w-[98%] md:w-[90%] lg:w-[70%]'>
      {children}
    </div>
  )
}
