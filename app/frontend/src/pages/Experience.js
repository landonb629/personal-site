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
        <div className='experience'>
            <h1 className='experience-header'>Professional Experience</h1>
            <div className="experience-hero">
            <div className='timeline'>
            {
               jobs.map((job, idx)=> {
                   console.log(idx);
                   return(
                    <div className={ idx%2 === 0 ? 'timeline-container left-container' : 'timeline-container right-container'}>
                        <img src=" " alt="place=holder" className={idx%2 === 0 ? 'container-img-left' : 'container-img-right'} />
                        <div className='text-box'>
                            <h2>{job.job}</h2>
                            <h4>{job.years}</h4>
                            <p>{job.company}</p>
                            <p>{job.description}</p>
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