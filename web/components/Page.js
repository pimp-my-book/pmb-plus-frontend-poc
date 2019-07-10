import React, {Component} from 'react'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import NavigationBar from './styles/NavigationBar'
import {Navbar, Nav} from 'react-bootstrap'

const theme = {
    pinkDarkest: '#ED0677',
    pinkDark: '#E06C9F',
    pink: '#E574BC',
    pinkLight: '#F9B4ED',
    pinkLighest:'#EFBCD5',
    black:'#232735',
    greyDark: '#A1A4B1',
    grey:'#D3D4D8',
    greyLight: '#F0F1F3',
    greyLightest: '#',
    white: '#FFFFFF',
    greenDarkest: '#498467',
    greenDark: '#61B066',
    green: '#52B788',
    greenLight: '#00A265',
    greenLightest: '#BBE1C3',
    blueDarkest: '#010059',
    blueDark: '#249DC9',
    blue: '#7FDBE8',
    blueLight: '#A8E8EA',
    blueLightest: '#E0FFF7',
    redDarkest: '#92140C',
    redDark: '#D80032',
    red: '#EF233C',
    redLight: '#EC5766',
    redLightest: '#EF7674',
    orangeDarkest: '#F25C54',
    orangeDark:'#F27059',
    orange: '#F4845F',
    orangeLight: '#F79D65',
    orangeLightest: '#F7B267',


}

const LogoStyles = styled.img`
    margin-top: 10px;
`


const GloabalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Kanit|Rubik+Mono+One&display=swap');

       h1,h2,h3{
        font-family: 'Rubik Mono One', sans-serif;
       }

       p { 
        font-family: 'Kanit', sans-serif;
       }

        body {
            margin: 0;
        }

`;

class Page extends Component {
    render(){
        return (
            <ThemeProvider theme={theme}>
            
            <React.Fragment>
            <NavigationBar>
                <Navbar.Brand href="/">
                <LogoStyles
                alt="pmb_plus"
                src="https://pmb-traimages.s3.amazonaws.com/pmb_plus_logo.svg"
                width="133"
                height="64"
                />
                </Navbar.Brand>
            </NavigationBar>
            {this.props.children}
            <GloabalStyle/>
            </React.Fragment>
           
             
            </ThemeProvider>
            
                  
                
        )
    }
}

export default Page