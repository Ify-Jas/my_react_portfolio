import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/mylogo.png';

function Header() {
  return (
    <>

      <Navbar className="bg-body-tertiary header">
        <Container>
          <Navbar.Brand href="#" className='brandName'>
            <img
              alt="brand logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top logo"
            />
            Jobs Inn
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;