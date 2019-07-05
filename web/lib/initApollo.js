// This is the initApollo file where we will connect to the backend
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-boost'
import fetch from 'isomorphic-fetch'

let apolloClient = null

function create (initialState){
    const isBrowser = typeof window !== 'undefined'
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql',
            credentials: 'same-origin',
            fetch: !isBrowser && fetch
        }),
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default function initApollo (initialState){
    //This creates a new client for every server side request
    //so data aint shared between connections
    if (typeof window === 'undefined'){
        return create(initialState)
    }

    //reuse client on client-side
    if(!apolloClient){
        apolloClient = create(initialState)
    }

    return apolloClient
}