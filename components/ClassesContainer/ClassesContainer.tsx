import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import ClassCard from '../ClassCard/ClassCard'




function ClassesContainer({ classes }: { classes: any }) {

    return (
        <section className='w-full flex flex-col justify-start items-center my-10'>
            <h2 className='text-6xl text-black font-montserrat font-semibold'> Top Classes </h2>
            <p className='text-base text-black font-open_sans font-medium'> Learn about our Indian army in metaverse, Join class now! </p>

            <div className='flex flex-wrap justify-center items-center my-5'>
                {classes && classes?.map((classObject: any) => {
                    return <ClassCard key={classObject?.classID} classObject={classObject} />
                })}
            </div>
        </section>
    )
}

export default ClassesContainer