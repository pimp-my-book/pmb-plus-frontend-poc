
//index.js
import App from './App'
import withApollo from '../lib/withApollo'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'


export const HelloQuery = gql`
  query HELLO {
      hello
  }
`

const Home = () => {
    return (
        <App>
        <Query query={HelloQuery}>
         {({loading, error, data}) =>{
             if (loading) return <p>loading</p>;
             if (error) return <p>{error}</p>;
             return(
                
                <h1>{data}</h1>
               
             )
         }}
        </Query>
         </App>
    )
    
    
}

export default Home;