import styled from 'styled-components'

export const LogoApp = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`
export const Animate = styled.div`
  span {
    color: #c59d10;
    font-size: 2rem;
    margin-right: 1rem;
  }
  span:nth-of-type(2) {
    color: #1e2a39;
    font-weight: 400;
    font-size: 1.8rem;
  }
  overflow: hidden;
  border-right: 0.1em solid #c59d10;
  margin-top:1rem;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typewriter 3.0s steps(25, end), blink-pipe 0.55s step-end infinite;
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 20%;
    }
  }
  @keyframes blink-pipe {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #c59d10;
    }
  }
`;
