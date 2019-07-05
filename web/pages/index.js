
//index.js
import App from './App'
import withApollo from '../lib/withApollo'
const Home = () => {
    return(
       <App>
       <h1>Hello Ya'll</h1>
       </App>
    )
    
}

export default withApollo(Home);