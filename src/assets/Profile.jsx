export default function Profile({ name, job, image, text, handleClick, FaChevronLeft, FaChevronRight, FaQuoteRight }) {
  return (
    <>
      <article className='review main'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={() => handleClick('prev')}>
            <FaChevronLeft />{' '}
          </button>
          <button className='next-btn' onClick={() => handleClick('next')}>
            <FaChevronRight />
          </button>

          <button className='next-btn btn-block' onClick={() => handleClick('random')}>
            Surprise Me
          </button>
        </div>
      </article>
    </>
  )
}
