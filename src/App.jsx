import React, { useState } from 'react'
import Profile from './assets/Profile'
import { FaBeer } from 'react-icons/fa'
import reviews from './data'
const App = () => {
  const [index, setIndex] = useState(0)
  const [profile, setProfile] = useState(reviews[index])

  const handleClick = string => {
    if (string === 'prev') {
      setIndex(index - 1)
      if (index === 0) setIndex(reviews.length - 1)
    }
    if (string === 'random') {
      let random = Math.floor(Math.random() * reviews.length)
      if (random === index) {
        random = index + 1
      }
      setIndex(random)
    }
    if (string === 'next') {
      setIndex(index + 1)
      if (index === reviews.length - 1) {
        setIndex(0)
      }
    }

    setProfile(reviews[index])
  }

  return <Profile key={profile.id} {...profile} handleClick={handleClick} FaBeer={FaBeer} />
}
export default App
