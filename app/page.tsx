import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import ClassesContainer from '@/components/ClassesContainer/ClassesContainer'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '@/firebaseConfig'

async function getClasses() {
  const classesCollectionRef = collection(db, `/subjects/indianArmy1/classes`)
  const res = await getDocs(classesCollectionRef)
  const data: any[] = res?.docs?.map(doc => doc.data())
  console.log(data)
  return data

}

export default async function Home() {
  const classes = await getClasses()
  

  return (
    <main>
      <NavBar />
      <ClassesContainer classes={classes} />

    </main>
  )
}
