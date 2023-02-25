import Image from 'next/image'
import ClassCard from '../ClassCard/ClassCard'
import bg1 from "../../public/images/BGs/bg2.jpg"


function ClassesContainer({ classes }: { classes: any }) {

    return (
        <section className='relative w-full flex flex-col justify-center items-center py-28'>
            <Image
                src={bg1}
                alt="bg1"
                width={1000}
                height={1000}
                className='-z-10 absolute w-full h-full object-cover'
            />
            <h2 className='text-6xl text-white font-montserrat font-semibold text-center'> Top Classes </h2>
            <p className='text-base text-white font-open_sans font-medium text-center my-2'> Learn about our Indian army in metaverse, Join class now! </p>

            <div className='flex flex-wrap justify-center items-center my-5'>
                {classes && classes?.map((classObject: any) => {
                    return <ClassCard key={classObject?.classID} classObject={classObject} />
                })}
            </div>
        </section>
    )
}

export default ClassesContainer