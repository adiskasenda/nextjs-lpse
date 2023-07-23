import React from 'react'

export const metadata = {
    title: 'Scrapper',
}

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <div className='py-10 px-10'>{children}</div>
  )
}
