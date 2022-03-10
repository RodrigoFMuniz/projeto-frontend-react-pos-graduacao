import styled from 'styled-components'
import {Link} from '@reach/router'
import {Container} from 'reactstrap'

export const Title = styled.div`
  font-size: 1.2rem;
  margin:1rem 0;
  color:#C59D10;
`
export const CustomLink = styled(Link)`
  text-decoration:none;
  font-weight: bold;
  color: #6C63FF;
  :hover{
    color: #6C63aa;
  }
  :active{
    color: #6C63FF;
  }
`
export const CustomContainer = styled(Container)`
  background-color: #FFFFFF;
  border-radius:10px;
  padding:1rem 1rem;
`

