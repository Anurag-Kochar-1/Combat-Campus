import Link from 'next/link'
import React from 'react'

const ClassCard = ({ classObject }: { classObject: any }) => {
  return (
    <Link
      href={`/class/${classObject?.classID}`}
      className='w-32 h-32 rounded-md bg-brand m-2'>
      <h3> {classObject?.classID} </h3>
    </Link>
  )
}

export default ClassCard