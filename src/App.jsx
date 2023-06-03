import React, { useState } from 'react'
import Profile from './assets/Profile'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './data'
import { random } from 'lodash'
const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = reviews[index]

  const checkNumber = number => {
    if (number > reviews.length - 1) return 0
    if (number < 0) return reviews.length - 1
    if (number === index) return checkNumber(--number)
    return number
  }
  const handleClick = string => {
    if (string === 'prev') setIndex(prev => checkNumber(--prev))
    if (string === 'next') setIndex(prev => checkNumber(++prev))
    if (string === 'random') setIndex(checkNumber(random(reviews.length)))
  }

  return (
    <main>
      <Profile
        key={id}
        job={job}
        text={text}
        name={name}
        image={image}
        handleClick={handleClick}
        FaQuoteRight={FaQuoteRight}
        FaChevronLeft={FaChevronLeft}
        FaChevronRight={FaChevronRight}
      />
    </main>
  )
}
export default App
