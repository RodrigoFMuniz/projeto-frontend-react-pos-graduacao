import { Router } from "@reach/router"
import Layout from "../components/layout"
import Home from "./home"
import Sobre from "./sobre"
import Endereco from './endereco'

const Views = ()=>{
  return (
      <Layout path="/">
        <Router >
          <Home path="/"/>
          <Endereco path="endereco" />
          <Sobre path="sobre" />
        </Router>
      </Layout>
  )
}

export default Views