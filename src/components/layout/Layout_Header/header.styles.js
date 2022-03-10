import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;
  background-color: #E8F1FF;
`
export const HeaderImg = styled.img`
max-width:calc(200px + 3vw);
object-fit:cover;
margin-left:1rem;
`
export const HeaderH1= styled.h1`
  font-size:minmax(1.5vw,2.5vw);
  max-width:30vw;
  margin-left:5%;
  span{
    color: #C59D10;
  }
`