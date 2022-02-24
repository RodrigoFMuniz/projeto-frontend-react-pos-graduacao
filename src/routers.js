// import React from 'react'
import { Router } from '@reach/router'
import Views from './views'

const Routers = ()=>{
  return (
   <Router>
     <Views path="/*" />
   </Router>
  )
}
export default Routers;