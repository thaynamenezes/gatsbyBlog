import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled  from "styled-components"

import central from "../images/central-perk.png"

const HeaderWrapper = styled.div `
  background: #00351b;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div `
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
    img {
      margin-bottom: 0rem;
    }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img style={{width: '200px'}} 
             src={ central } 
             alt="Central Perk Coffee Icon"/>
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
