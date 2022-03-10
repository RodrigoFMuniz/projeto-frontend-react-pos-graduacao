import { FaWpforms } from '@react-icons/all-files/fa/FaWpforms'
import { Animate, LogoApp } from './logo.styles';
import {Col} from 'reactstrap'

const Logo = ()=>{
  return (
    <>
      <Col xm={12}>
        <LogoApp>
          <Animate>
            <span><FaWpforms /></span>
            <span>Resume App</span>
          </Animate>
        </LogoApp>
      </Col>
    </>
  );
}
export default Logo