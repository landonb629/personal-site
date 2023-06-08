import styled from 'styled-components'
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Wrapper = styled.ul`
   display: flex;
   align-items: flex-end;
   justify-content: right;
   height: 100%;
   .footer-items { 
       padding-right: 15px;
       list-style-type: none;
   }
`
export const Footer = () => { 
    return(
    <Wrapper>
        <li className='footer-items'>{<FaGithub />}</li>
        <li className='footer-items'>{ <FaLinkedin />}</li>    
    </Wrapper>
    ) 
}