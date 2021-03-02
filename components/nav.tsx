import React from 'react'
import Link from 'next/link'
import { navLink } from "../variables"

const Nav = () =>
  <nav>
    <Link href={navLink.home}>
      <a>Home</a>
    </Link>

    <Link href={navLink.quirky}>
      <a>Quirky</a>
    </Link>

    <Link href={navLink.human}>
      <a>Human</a>
    </Link>

    <Link href={navLink.geschiedenis}>
      <a>Geschiedenis</a>
    </Link>

    <Link href={navLink.nature}>
      <a>Nature</a>
    </Link>

    <Link href={navLink.spaceTech}>
      <a>space & Tech</a>
    </Link>


  </nav>



export default Nav
