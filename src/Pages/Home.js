import React from 'react'
import Client from '../component/Client'
import Form from '../component/Form'

const Home = () => {
  return (
    <div className='flex gap-4'>
      <div className='w-[60%]'>
      <Client/>

      </div>
      <div className='mt-10 w-[35%]'>
            <h1 className='font-mono font-bold'>add new user</h1>
       <Form/>

      </div>
    </div>
  )
}

export default Home