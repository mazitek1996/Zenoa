
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import "./header.css"

// const menuItems = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "About", path: "/about" },
//   { name: "Case Study", path: "/case_study" },
//   { name: "Blogs", path: "/blogs" },
//   { name: "Contact", path: "/contact" },
// ];

// const Header = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <Navbar  expand="lg" role="navigation">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Zenoa</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarResponsive" />
//           <Navbar.Collapse id="navbarResponsive">
//             <Nav className="ms-auto">
//               {menuItems.map((item, index) => (
//                 <Nav.Link
//                   key={index}
//                   as={Link}
//                   to={item.path}
//                   active={location.pathname === item.path}
//                 >
//                   {item.name}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./header.css"

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Case Study", path: "/case_study" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar expand="lg" role="navigation" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/">Zenoa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              {menuItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  active={location.pathname === item.path}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
