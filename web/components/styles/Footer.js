import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'

const FooterStyles = styled.footer`
height: 100px;
width: 100%;
position: absolute;
bottom: 0;
left:0;
background-color: ${props => props.theme.blueDarkest};
border-bottom: ${props => props.theme.pinkDarkest} 8px solid;
`

const Footer = () => 
<FooterStyles className="fixed-bottom">

</FooterStyles>


export default Footer