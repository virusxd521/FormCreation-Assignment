import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavigationBar : FC<any> = () =>  {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li" className='mt-2 mx-3 p-2 rounded-3 bg-info'>
        <Link className='text-decoration-none text-dark text-white' to="/">Config</Link>
      </Nav.Item>
      <Nav.Item as="li" className='mt-2 p-2 rounded-3 bg-info'>
        <Link className='text-decoration-none text-white' to="/results">Results</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;