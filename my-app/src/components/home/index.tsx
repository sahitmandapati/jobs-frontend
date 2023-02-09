import React, { useState } from 'react'
import NavbarHome from './NavbarHome'
import Jobs from './Jobs'
import Applications from './Applications'

function Home() {

  const [activePage, setActivepage] = useState<string>("home")

  return (
    <div>
      <NavbarHome setActivepage={setActivepage} />
      { activePage === "home" && <Jobs /> }
      { activePage === "applications" && <Applications /> }

    </div>
  )
}

export default Home