import React from 'react'
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <div className="w-full mx-auto lg:w-10/12">
      <h1 className="text-3xl mb-10 font-bold">Search Github Folks</h1>
      <UserSearch />
      <UserResults/>
    </div>
  )
}

export default Home;