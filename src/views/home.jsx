import styled from "styled-components"
import {Link} from '@reach/router'

const Home = ()=>{
  return (  
      <Container>
        <Link to='sobre'>Sobre</Link>
        Home
      </Container>
  )
}
export default Home;

const Container = styled.div`
 text-align:center;
`