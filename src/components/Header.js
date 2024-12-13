import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function NavScrollExample() {
  const textdata = useRef();
  const navigate = useNavigate();

  function searchData(ev) {
    ev.preventDefault();
    const textdatavalue = textdata.current.value;
    console.log(textdatavalue);
    
    navigate(`/search-data/${textdatavalue}`);
  }

  return (
    <div style={{
      p:"10px",
      alignItems:"center",
      borderBottom:"2px solid black"
    }}>
    <Navbar style={{backgroundColor:"#88BDBC"}} expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontSize:'25px' , fontWeight:'bold' , cursor:'pointer'}} href='/'>MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  
            className="ms-auto my-2 my-lg-0 d-flex"
            style={{ maxHeight: '100px' , fontSize: '20px' , fontWeight: 'bold' }}
            navbarScroll
          >
            <Link className='nav-link' to="/popular">Popular</Link>
            <Link className='nav-link' to="/toprated">Top Rated</Link>
            <Link className='nav-link' to="/upcoming">Upcoming</Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchData}>
            <Form.Control
              type="search"
              ref={textdata} 
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark" type="submit" id='btn'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;
