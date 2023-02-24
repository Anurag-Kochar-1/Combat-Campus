import React from 'react'

const ClassCard = ( {classObject}: {classObject: any} ) => {
  return (
    <div className='w-32 h-32 rounded-md bg-brand m-2'>
      <h3> {classObject?.classID} </h3>
    </div>
  )
}

export default ClassCard