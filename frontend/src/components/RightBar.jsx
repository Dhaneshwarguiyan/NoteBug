import React from 'react'
import People from './People'

const RightBar = () => {
  return (
    <div className='w-1/5 h-full ml-5 '>
        <div className='border border-slate-700 rounded-2xl mt-4 flex flex-col gap-5 py-4 px-4'>
          <People />
          <People />
          <People />
          <People />
        </div>
    </div>
  )
}

export default RightBar
