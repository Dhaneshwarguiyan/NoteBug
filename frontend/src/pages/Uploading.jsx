import React from 'react'
import Upload from '../components/Upload'

const Uploading = ({posts,setPosts}) => {
  return (
    <div className='w-4/6'>
      <Upload posts = {posts} setPosts={setPosts}/>
    </div>
  )
}

export default Uploading
