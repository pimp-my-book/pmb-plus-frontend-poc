import {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} from 'next/constants'


module.exports = phase => {
    //get the dev stage
    const isDev = phase = PHASE_DEVELOPMENT_SERVER

    //get the prod stage
    const isProd = phase = PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'


    
    serverRuntimeConfig: {
        localEndpoint:'http://localhost:4000/graphql',
        devEndpoint: 'https://a9mmxv28mh.execute-api.us-east-1.amazonaws.com/dev/graphql'

    }
}