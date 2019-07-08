
//index.js
import React, {Component} from 'react'
import App from './App'
import withApollo from '../lib/withApollo'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'


 const HelloQuery = gql`
  {
      hello
  }
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
                    
                    <h1>{data.hello}</h1>
                   
                 )
             }}
            </Query>
             </App>
        )
    }
}


export default Home;