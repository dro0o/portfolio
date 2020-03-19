import React, { Component } from "react"
import "./App.css"

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Main from "./components/main"
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(" + require("./img/background.jpg") + ") center / cover"
          }}
        >
          <Header
            transparent
            title={
              <a className="links" href="/">
                Andrew Pittman
              </a>
            }
            style={{ color: "white" }}
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <a className="side-links" href="/">
                Andrew Pittman
              </a>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
