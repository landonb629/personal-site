import styled from 'styled-components'

export const About = () => { 
    const Wrapper = styled.div`
        .hero-about { 
            display: flex;
            justify-content: center;
            padding: 15px;
            flex-direction: column;
            align-items: center;
            
        }
        .hero-content{
            text-align: center;
        }
    `
    return(
       <Wrapper>
       <div className='hero-about'>
           <h1>About Me</h1>
           <div className='hero-content'>
                <h4>I'm a DevOps Engineer currently focusing on Azure/AWS, CI/CD, containerization, cloud architecture and Design patterns, kubernetes, and full stack development.</h4>
                <br></br>
                <h4>I started my career in the systems administration space doing all on-premise work, but I have always had a fascination with the cloud and software. After moving on from sysadmin, I worked as a security engineer focused on cloud security, risk management, incident response, and IAM. Security engineering was interesting, but ultimately I still had an itch to get into cloud or devops engineering, so I moved onto a devops team where I got my feet wet and learned a ton. </h4>
                <br/>
                <h4>Some things that I enjoy outside of work are golf, pickleball, and working on personal projects</h4>
           </div>
       </div>
       </Wrapper>
    )
}