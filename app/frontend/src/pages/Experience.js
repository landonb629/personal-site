import {useState, useEffect} from 'react'
import { experience } from '../data'
import {IoIosArrowDropdown} from 'react-icons/io'

export const Experience = () => { 
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=> { 
        setLoading(true)
        setJobs(experience)
        setLoading(false)
    },[])

    return(
        <div className='experience'>
            <h1 className='experience-header'>Professional Experience</h1>
            <div className="experience-hero">
            <div className='timeline'>
            {
               jobs.map((job, idx)=> {
                   return(
                    <div className='job-box'>
                        <img src={require(`/public/images/${job.picture}`)} alt="place=holder" className='job-img' />
                        <div className='text-box'>
                            <h2 className='job-title'>{job.job}</h2>
                            <h4 className='job-years'>{job.years}</h4>
                            <p>{job.company}</p>
                            <p className='experience-description'>{job.description}</p>
                        </div>     
                     </div>
                   ) 
               })
            }
            </div>
        </div>
        </div>
    )
}