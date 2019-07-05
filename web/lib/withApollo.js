/*
This is the withApollo wrapper that allows to connect 
client to backend.

*/

import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import {endpoint, devEndpoint} from '../config';
function createClient({headers}) {
    return new ApolloClient({
        uri: process.env.NODE_ENV === 'development' ? endpoint : devEndpoint,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include'
                }
            })
        },
        headers
    });




}

export default withApollo(createClient);