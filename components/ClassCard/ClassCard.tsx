import Link from 'next/link'
import React from 'react'

const ClassCard = ({ classObject }: { classObject: any }) => {
  return (
    <Link
      href={`/class/JD7UPZr1r7pR6YyKxHjL`}
      className='w-32 h-32 rounded-md bg-brand m-2'>
      <h3> {classObject?.className} </h3>
    </Link>
  )
}

export default ClassCard