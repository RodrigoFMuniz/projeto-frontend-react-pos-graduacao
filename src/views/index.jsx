import { Router } from "@reach/router"
import Layout from "../components/layout"
import Home from "./view_home/home"
// import Sobre from "./view_sobre/sobre"
import Endereco from './view_endereco/endereco'

const Views = ()=>{
  return (
      <Layout path="/">
        <Router >
          <Home path="/"/>
          <Endereco path="endereco" />
          {/* <Sobre path="sobre" /> */}
        </Router>
      </Layout>
  )
}

export default Views