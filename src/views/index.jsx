import { Router } from "@reach/router"
import Layout from "../components/layout"
import Home from "./home"
import Sobre from "./sobre"

const Views = ()=>{
  return (
      <Layout path="/">
        <Router >
          <Home path="/"/>
          <Sobre path="sobre" />
        </Router>
      </Layout>
  )
}

export default Views