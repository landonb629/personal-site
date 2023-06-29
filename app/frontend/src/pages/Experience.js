import {useState, useEffect} from 'react'
import { experience } from '../data'
import {IoIosArrowDropdown} from 'react-icons/io'
export const Experience = () => { 
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(()=> { 
        setLoading(true)
        setJobs(experience)
        setLoading(false)
    },[])

    const toggleJobDesc = () => {
        console.log('triggered')
        setShowDropDown(!showDropDown)
    }

    return(
        <div className="experience-hero">
            <h1>Professional Experience</h1>
            {
               jobs.map((job)=> {
                   console.log(job)
                   return(
                    <div className='jobs'>
                        <div className='job-left'>
                            <h4>{job.job}</h4>
                            <p>{job.years}</p>
                        </div>
                        <div className='job-right'>
                            <h4>{job.company}</h4>
                            <div className='job-dropdown'>
                            <button onClick={toggleJobDesc}><IoIosArrowDropdown className='icon-home'  /></button>
                            <div className='job-dropdown-menu'>
                            {
                                job.description.map((desc)=> { 
                                 return(
                                        <p className={ showDropDown ? 'job-desc' : 'hide-job-desc' }>{desc}</p>
                                    )
                                 })
                             }
                            </div>
                            
                            </div>
                            
                        </div>
                    </div>
                   ) 
               })
            }
        </div>
    )
}