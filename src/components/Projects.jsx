import React from 'react'
import {projectList} from './sampleData/moduleList'

const Projects = () => {
    // console.log(projectList?.map(Item => ({name : Item.projectName,tools :Item.projectTools})))
  return (
    <div className='mt-20 '>
        <h3 className='text-3xl text-white mx-10 px-10 py-10'>PROJECTS</h3>
      <div className='flex justify-between flex-wrap mx-10 py-10 '>
            {projectList?.map((el,index)=>{
                return <div key={index} className='max-w-[300px] m-5 bg-gray-800 p-10 rounded-lg'>
                        <h3 className='text-yellow-300 text-xl py-2 '>{el.projectName}</h3>
                        <p className='text-white py-1'>{el.projectDiscription}</p>
                        <a href="https://aidf-front-end-kavindu-maleesha.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline py-1" >{el.ProjectLink_id1}</a>
                        <ul className='text-gray-300 py-2 px-4 list-disc'>
                            <h4 className='text-yellow-500'>Tech Stack</h4>
                            {el.projectTools?.map(tool =>{
                                return <li className='py-1'>{tool.tool}</li>
                            })}
                        </ul>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Projects
