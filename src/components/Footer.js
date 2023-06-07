import styled from 'styled-components'
export const Footer = () => { 
    const Wrapper = styled.div`
        .footer { 
            bottom: 0;
            left: 0;
            position: fixed;
            text-align: center;
            width: 100;
        }
    `
    return(
    <Wrapper>
    <div className='footer'>
        <p>github linkedin resume</p>
    </div>
    </Wrapper>
    )
    
}