import React from 'react'
import Button from '@mui/material/Button';

const Profile = () => {
 
  return (
    <>
    <center>
    <h2>Profile</h2>

    </center>
    <div className='profile'>
        <button  >View Profile</button>
        <button >Previous Posts</button>
     <a href='/post'  ><button  >New Post</button></a>
    </div>
    </>
  )
}

export default Profile