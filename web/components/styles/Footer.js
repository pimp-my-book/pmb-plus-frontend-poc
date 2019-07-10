import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'

const FooterStyles = styled.footer`
height: 100px;
width: 100%;
background-color: ${props => props.theme.blueDarkest};
border-bottom: ${props => props.theme.pinkDarkest} 8px solid;
`

const Footer = () => 
<FooterStyles>
    
</FooterStyles>


export default Footer