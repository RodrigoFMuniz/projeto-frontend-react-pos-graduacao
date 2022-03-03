import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:none;
  font-family:'Kodchasan',monospace, sans-serif;
  font-weight: 700;
}
body,
#root{
height: 100vh;
background-color: #E8F1FF;
flex:1;
}
`
export default GlobalStyle;