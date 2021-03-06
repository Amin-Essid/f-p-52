import React from "react"
import { Navbar } from "react-bootstrap"
import logo from "../images/home/logo.png"

const Mainav: React.FC = () => {
  return (
    <>
      <Navbar style={{ maxWidth: "60%" }} bg="white">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{ maxWidth: "100%", height: "auto" }}
            className="d-inline-block align-top"
            alt="health headlines"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Mainav
