import Image from 'next/image'
import ClassCard from '../ClassCard/ClassCard'


function ClassesContainer({ classes }: { classes: any }) {

    return (
        <section id='subjects-section' className='relative w-full flex flex-col justify-center items-center py-28'>
            <h2 className='text-6xl md:text-8xl text-white font-montserrat font-bold text-center'> Top Classes </h2>
            <p className='text-3xl text-white font-open_sans font-semibold text-center my-4'> Enter the Future of Military Education: The Metaverse for Military Science, <br /> Join class now! </p>

            <div className='flex flex-wrap justify-center items-center my-5'>
                {classes && classes?.map((classObject: any) => {
                    return <ClassCard key={classObject?.classID} classObject={classObject} />
                })}
            </div>
        </section>
    )
}

export default ClassesContainer