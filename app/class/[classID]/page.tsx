import NavBar from '@/components/NavBar/NavBar'
import { db } from '@/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'

const getClassDetails = async () => {
  const classRef = doc(db, `/subjects/indianArmy1/classes/JD7UPZr1r7pR6YyKxHjL`)
  const res = await getDoc(classRef)
  return res?.data()

}

const page = async () => {
  const classData = await getClassDetails()

  return (
    <div>
      <NavBar />
      <iframe
        className='h-[calc(100vh-5rem)] w-full'
        width="100%"
        src={classData?.classMetaverseID}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera; display-capture; xr-spatial-tracking; xr;"
      ></iframe>
    </div>
  )
}

export default page