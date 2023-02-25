import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ClassCard = ({ classObject }: { classObject: any }) => {
  return (
    <Link
      href={`/class/JD7UPZr1r7pR6YyKxHjL`}
      className='w-52 h-52 relative rounded-md bg-brand m-2'>

      {/* <h3> {classObject?.className} </h3> */}
      {classObject?.classLogos && (
        <Image
          src={classObject?.classLogos[Math.floor(Math.random() * 2)]}
          alt="image"
          width={300}
          height={300}
          className='z-10 absolute w-full h-full object-cover bg-blend-multiply rounded-md'
          draggable="false"
        />
      )}
    </Link>
  )
}

export default ClassCard