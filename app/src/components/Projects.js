import {Link} from 'react-router-dom'
import {posts} from '../data'
import {useState, useEffect} from 'react'
import {FaTags} from 'react-icons/fa'
export const Projects = () => { 
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(()=> { 
        setIsLoading(true)
        setProjects(posts)
        setIsLoading(false)
        console.log(projects)
    },[])
    if (isLoading) { 
        return <div>Loading....</div>
    }
    return(
        <div className='home-hero'>
            { 
                projects.map((project)=> { 
                    return(
                        <div className='posts-container'>
                            <div className='posts-children'>
                                <h2 className='title'><Link  className='title' to={`/projects/${project.location}`} state={{type: "projects"}}>{project.name}</Link></h2>
                                <p className='timestamp'>{project.timestamp}</p>
                                <div className='tag-container'>
                                    <FaTags />
                                    { 
                                        project.tags.map((tag)=> { 
                                            return(
                                                <p className='tag'>{tag}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
 }