
//index.js
import React, {Component} from 'react'
import App from './App'
import withApollo from '../lib/withApollo'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import BookCard from '../components/styles/cards/BookCard'
import {GET_ALL_BOOKS} from '../graphql/Queries'
 

const Test = styled.h1`
color: ${props => props.theme.pink}
`

class Home extends Component {

    

    render(){
       
        return (
           
            <Query query={GET_ALL_BOOKS}>
            
             {({loading, error, data}) =>{
                 console.log(data)
                 if (loading) return <p>loading</p>;
                 if (error) return <p>error</p>;
                 
                 return(
                    
                    <>
                     {data.getAllBooks.map(books =>(
                         <div key={books.ID}>

                        <BookCard
                    cardImg={books.image}
                    bookTitle={books.title}
                    bookPrice={books.price}
                    bookGrade={books.grade}
                    />
                         </div>
                        ))}
                   
                  
                   </>
                 )
                
             }}
            </Query>
            
             
        )
    }
}


export default Home;