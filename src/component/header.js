import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Jobs Inn
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;