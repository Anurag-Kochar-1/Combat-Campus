import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import ClassesContainer from '@/components/ClassesContainer/ClassesContainer'
import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import Leaderboard from '@/components/Leaderboard/Leaderboard'

async function getClasses() {
  const classesCollectionRef = collection(db, `/subjects/indianArmy1/classes`)
  const res = await getDocs(classesCollectionRef)
  const data: any[] = res?.docs?.map(doc => doc.data())
  console.log(data)
  return data
}

async function getLeaderboardData() {
  const leaderboardQuery = query(collection(db, 'users'), orderBy("userCoins", "asc"))
  const res = await getDocs(leaderboardQuery)
  const data = res?.docs?.map(doc => doc.data())
  return data
}


export default async function Home() {
  const classes = await getClasses()
  const leaderBoardData = await getLeaderboardData()


  return (
    <main className='w-full flex flex-col items-center justify-start'>
      <NavBar place='home' />
      <ClassesContainer classes={classes} />
      <Leaderboard leaderBoardData={leaderBoardData} />
    </main>
  )
}
