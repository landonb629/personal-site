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
    /*
        the "state" in Link is how we are passing whether or not this is a project or post, this is allowing us to specifically tell one single component where to get the content from. if we didnt do this, we would have to create a Post and Project component, since we're passing that data, we can use a generic component called Content
    */
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