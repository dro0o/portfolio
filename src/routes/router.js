import React from "react"

import Landing from "../components/Landing"
import Who from "../components/Who"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

const routes = {
  "/": () => <Landing />,
  "/who": () => <Who />,
  "/projects": () => <Projects />,
  "/resume": () => <Resume />
}

export default routes
