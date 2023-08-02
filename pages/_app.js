import '@/styles/globals.css'
import Layout from '../components/layouts/DefaultLayout'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
   
  ) 
}
