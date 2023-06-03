export default function Profile({ id, name, job, image, text, handleClick, FaBeer }) {
  return (
    <>
      <article key={id} className='review main'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaBeer />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='btn prev-btn' onClick={() => handleClick('prev')}>
            Prev
          </button>
          <button className='btn next-btn' onClick={() => handleClick('next')}>
            Next
          </button>
          <button className='next-btn btn-block' onClick={() => handleClick('random')}>
            Surprise Me
          </button>
        </div>
      </article>
    </>
  )
}
