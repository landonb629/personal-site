import styled from 'styled-components'
export const Footer = () => { 
    const Wrapper = styled.div`
        ul { 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        li { 
            list-style-type: none;
            padding: 10px;
        }
        .footer { 
            bottom: 0;
        }
    `
    return(
    <Wrapper>
    <div className='footer'>
        <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Resume</li>
        </ul>
    </div>
    </Wrapper>
    )
    
}