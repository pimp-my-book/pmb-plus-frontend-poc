const  {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require ('next/constants')
const withTM = require('next-transpile-modules')
const withCSS = require('@zeit/next-css')

module.exports = phase => {
    //get the dev stage
    const isDev = phase = PHASE_DEVELOPMENT_SERVER

    //get the prod stage
    const isProd = phase = PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
 
    //make an env object to return the right URL based on the stage
    const env = {
        API_ENDPOINTS: (() => {
            if (isDev) return 'http://localhost:4000/graphql'
            if (isProd) {
                return 'https://a9mmxv28mh.execute-api.us-east-1.amazonaws.com/dev/graphql'
            }
        })
    }

    //return an env object for the config
    return {
        env
    }

}

module.exports = withCSS({
    cssModules: true,
   target: 'serverless',
   webpack (config){
       config.module.rules.push({
           test:/\.css$/i,
           use:['style-loader','css-loader']
       })
       return config
   }
})

module.exports = withTM({
    transpileModules: ['umqombothi-component-library']
})