import React from 'react'
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl mb-10 font-bold">Search Github Folks</h1>
      <UserSearch/>
      <UserResults/>
    </>
  )
}

export default Home;