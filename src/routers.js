import React from 'react'
import { Router } from '@reach/router'

//views
import Home from './views/home'
import Sobre from './views/sobre'

const Routers = ()=>{
  return (
    <Router>
     <Home path="/" />
     <Sobre path="sobre" />
    </Router>
  )

}
export default Routers;