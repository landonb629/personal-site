import styled from 'styled-components'
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Wrapper = styled.ul`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   height: 100%;
   background-color: #e3e3e3;
   .footer-items { 
       padding-right: 15px;
       list-style-type: none;
   }
`
export const Footer = () => { 
    return(
    <Wrapper>
        <div>Landon Babay</div>    
    </Wrapper>
    ) 
}