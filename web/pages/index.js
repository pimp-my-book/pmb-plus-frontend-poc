
//index.js
import React, {Component} from 'react'
import App from './App'
import withApollo from '../lib/withApollo'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import BookCard from '../components/styles/cards/BookCard'
import {GET_ALL_BOOKS} from '../graphql/Queries'
import Link from 'next/link'

const BookGrid = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(auto-fit,340px);
justify-content:center

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
                    
                    <BookGrid>
                     {data.getAllBooks.map(books =>(
                         <div key={books.ID}>
                         
                       <Link
                       href='/viewBook/[ID]'
                       as={`/viewBook/${books.ID}`}
                       >{books.title }</Link>
                        
                  
                         </div>
                        ))}
                   
                  
                   </BookGrid>
                 )
                
             }}
            </Query>
            
             
        )
    }
}


export default Home;

/*
<BookCard
                    cardImg={books.image}
                    bookTitle={books.title}
                    bookPrice={books.price}
                    bookGrade={books.grade}
                    />

*/