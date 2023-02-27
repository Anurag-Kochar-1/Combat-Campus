import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import ClassesContainer from '@/components/ClassesContainer/ClassesContainer'
import { collection, doc, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import Leaderboard from '@/components/Leaderboard/Leaderboard'
import bg1 from "../public/images/BGs/bg2.jpg"
import Footer from '@/components/Footer/Footer'
import EarnCoinsSection from '@/components/EarnCoinsSection/EarnCoinsSection'
import RewardsSection from '@/components/RewardsSection/RewardsSection'

async function getClasses() {
  const classesCollectionRef = collection(db, `/subjects/indianArmy1/classes`)
  const res = await getDocs(classesCollectionRef)
  const data: any[] = res?.docs?.map(doc => doc.data())
  console.log(data)
  return data
}

async function getLeaderboardData() {
  const leaderboardQuery = query(collection(db, 'users'), orderBy("userCoins", "desc"), limit(5))
  const res = await getDocs(leaderboardQuery)
  const data = res?.docs?.map(doc => doc.data())
  return data
}


export default async function Home() {
  const classes = await getClasses()
  const leaderBoardData = await getLeaderboardData()


  return (
    <main className='w-full mt-[5rem] flex flex-col items-center justify-start bg-cover bg-no-repeat bg-fixed bg-center bg-brand'
      style={{ backgroundImage: `url(${`https://cdn.wallpapersafari.com/72/81/Mp7EhK.jpg`})` }}
    >
      <NavBar place='home' />
      <ClassesContainer classes={classes} />
      <Leaderboard leaderBoardData={leaderBoardData} />
      <EarnCoinsSection />
      <RewardsSection />
      <Footer />
    </main>
  )
}
