//This is the entry of our app where
// we can feed the data into all the components

import App, {Container} from 'next/app'
import React from 'react'
import withApolloClient from '../lib/withApollo'
import {ApolloProvider} from 'react-apollo'

class MyApp extends App {
    render(){
        const {Component, pageProps, apolloClient} = this.props
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                  <Component {...pageProps}/>                
                </ApolloProvider>
            </Container>
        )
    }
}


export default withApolloClient(MyApp)