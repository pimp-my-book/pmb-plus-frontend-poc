
//index.js
import React, {Component} from 'react'
import App from './App'
import withApollo from '../lib/withApollo'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

 const HelloQuery = gql`
  {
      hello
  }
`

const Test = styled.h1`
color: #ED0677
`

class Home extends Component {

    

    render(){
       
        return (
            <App>
            <Query query={HelloQuery}>
             {({loading, error, data}) =>{
                 console.log(data)
                 if (loading) return <p>loading</p>;
                 if (error) return <p>error</p>;
                 
                 return(
                    
                    <Test>{data.hello}</Test>
                   
                 )
             }}
            </Query>
            </App>
             
        )
    }
}


export default Home;