/** @format */

import { Container, Nav, Navbar } from 'react-bootstrap';

const mainPages = [
  {
    path: '#global',
    name: 'Global',
  },
  {
    path: '#your-country',
    name: 'Your Country',
  },
  {
    path: '#other-countries',
    name: 'Other Countries',
  },
];

export default function Header() {
  return (
    <Navbar variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Corona Virus</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse className='justify-content-end'>
          <Nav className='justify-content-end'>
            {mainPages.map((page, idx) => (
              <Nav.Link key={idx} href={page.path}>
                {page.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
