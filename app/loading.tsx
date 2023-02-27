import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-brand flex justify-center items-center'>
      <AiOutlineLoading3Quarters
        size={"2rem"}
        className="text-white animate-spin"
      />
    </div>
  )
}

export default Loading