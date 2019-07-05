/*
This is the withApollo wrapper that allows to connect 
client to backend.

*/
import React from 'react'
import initApollo from './initApollo'
import Head from 'next/head'
import {getDataFromTree} from 'react-apollo'

export default App => {
    return class Apollo extends React.Component {
        static displayName = 'withApollo(App)'
        static async getInitialProps (ctx){
            const {Component, router} = ctx
            
            let appProps = {}
            if (App.getInitialProps){
                appProps = await App.getInitialProps(ctx)
            }


            //Run all GraphQL queries in component Tree 
            //and extract the resulting data
            const apollo = initApollo()
            if (typeof window === 'undefined'){
                try {
                    //run all GraphQL queries
                    await getDataFromTree(
                        <App
                        {...appProps}
                        Component={Component}
                        router={router}
                        apolloClient={apollo}
                        />
                    )
                } catch(error){
                    //this stops Apollo CLIENT errors crashing SSR
                    console.log('Error while running `getDataFromTree`', error)
                }
               //getDataFromTree does not call compWillUnmount
               //so head side effect needs to be cleared manually
                Head.rewind()
            }

            //extract query data from apollo state
            const apolloState = apollo.cache.extract()

            return {
                ...appProps,
                apolloState
            }
        }

        constructor (props){
            super(props)
            this.apolloClient = initApollo(props.apolloState)
        }

        render (){
            return <App {...this.props} apolloClient={this.apolloClient}/>
        }
    }
}