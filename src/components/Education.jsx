import React from 'react'
import {moduleList} from './sampleData/moduleList'

const Education = () => {
  return (
    <div className='mt-10 flex justify-around flex-wrap'>
      <div className='mx-15'>
        <h3 className='text-white text-3xl'>EDUCATION</h3>
        <div className='py-10 px-10 md:mt-15'>
            <h3 className='text-2xl text-yellow-500'>Advanced Level (2017 - 2020)</h3>
            <h4 className='text-gray-400'>Biological Science</h4>
            <h4 className='text-gray-200'>Richmond College Galle</h4>
        </div>
        </div>
        <div className='flex justify-around flex-wrap'>
        <div className='py-10 px-10 md:mt-10'>
            <h3 className='text-2xl text-yellow-500 '>BACHELOR OF SOFTWARE ENGINEERING (2021 - Present)<sub className='text-gray-400 text-sm'> (ug) </sub></h3>
            <h4 className='text-gray-500'>OUSL</h4>
            <div className='h-[400px] overflow-y-auto mt-1'>
                <ul className=''>
                    {moduleList?.map((el)=>{
                        return <li className='text-gray-400 px-3'>{el.moduleName}</li>
                        })}
                </ul>
            </div>
        </div>
      </div>
      </div>
    
  )
}

export default Education;
