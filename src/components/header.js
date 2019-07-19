import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled  from "styled-components"

import central from "../images/central-perk.png"

const HeaderWrapper = styled.div `
  background: #00351b;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled.div `
  margin: 0;
  max-width: 800px;
  padding: .5rem;
    img {
      margin-bottom: 0rem;
    }
`;

const NavbarContainer = styled.div `
  a {
    color: #fff;
    text-decoration: none;
    padding: .5rem;
    font-size: .9rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: '0' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
        <img style={{width: '150px'}} 
             src={ central } 
             alt="Central Perk Coffee Icon"/>
        </Link>
      </h1>
    </HeaderContainer>
    <nav style={{
      margin: 'auto 1rem',
      padding: '1 rem'
    }}>
      <NavbarContainer>
        <Link to="/">Blog</Link>
        <Link to="/about/">About</Link>
        <Link to="/company/team/">Team</Link>
      </NavbarContainer>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
