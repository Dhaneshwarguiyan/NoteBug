import { useEffect, useState } from 'react'
import People from './People'
import axios from 'axios'

const RightBar = () => {
  const [users,setUsers] = useState(null);
  async function getUsers(){
    try {
      const response = await axios.get('http://localhost:8000/api/v1/users/all',{
        withCredentials:true
      })
      setUsers(response.data);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
      getUsers();
  },[])
  return (
    <div className='w-1/5 h-full ml-2 '>
        {
          users && <div className='border border-slate-700 rounded-2xl mt-4 flex flex-col gap-5 py-4 px-2'>
          {
            users.map((user,index)=>{
              return <People user={user} key={index} />
            })
          }
        </div>
        }
    </div>
  )
}

export default RightBar
