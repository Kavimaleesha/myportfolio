import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import kmpic from './sampleData/kavinduimage.png'

const Home = () => {
  return (
    <div>
      <div className='flex mx-auto items-center justify-center mt-20'>
        <img src={kmpic} alt="" className='w-80 h-80 size-fit bg-gradient-to-b from-teal-500 rounded-full' />
      </div>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Kavindu Maleesha</h2>
        <h3 className='text-2xl py-2 text-white'>Software Engineer</h3>
        <div className='flex justify-center'>
          <p className='text-md py-5 leading-5 text-gray-400 md:text-lg md:w-[800px] '>
          Hello there! I am a Bachelor of Software Engineering undergraduate at Open University seeking opportunities to enhance my knowledge by working in teams. 
          Therefore, I'm looking for a challenging career in an organization where I can contribute my skills and competencies. Also, 
          I'm waiting to improve my abilities and gain experience with a new career in my life.
          </p>
        </div>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://www.linkedin.com/in/kavindu-maleesha-93b952219/' target='blank'><AiFillLinkedin /></a>
        <a href='https://github.com/Kavimaleesha' target='blank'><AiFillGithub /></a>
      </div>
    </div>
  )
}

export default Home
