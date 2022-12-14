import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function NewNav({ setUser }) {
  function handleLogOutClick() {
    console.log("click");
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // console.log("clikc")
        setUser(null);
      }
    });
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-end">
        <Container>
          <Navbar.Brand href="#about">Pro-Sprinkler</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Appointment</Nav.Link> */}
            <Button>
              <Link className="text-decoration-none  text-white" to="/about">
                About
              </Link>
            </Button>
            <Button>
              <Link className="text-decoration-none  text-white" to="/schedule">
                Schedule
              </Link>
            </Button>
            <Button onClick={handleLogOutClick}>Logout</Button>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NewNav;
