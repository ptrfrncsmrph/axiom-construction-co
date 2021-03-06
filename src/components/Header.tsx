import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import { getColor, Color, transparentize } from "lib/colors"
import { Logo } from "components/Logo"
import { Nav } from "components/Nav"
import styled from "@emotion/styled"
import { boxShadow } from "lib/styles"

type Props = {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => (
  <header
    css={css`
      display: flex;
      justify-content: center;
      position: sticky;
      top: 0;
      width: 100%;
      padding: 1rem 1rem 0.5rem;
      background: ${getColor(Color.Background)};
      z-index: 2;
      ${boxShadow(Color.Gray900, 10)}
    `}
  >
    <HeaderWrapper>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      <Nav />
    </HeaderWrapper>
  </header>
)

const HeaderWrapper = styled.div`
  flex-grow: 1;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;

  h1 {
    svg {
      grid-row-start: 1;
      display: block;
      height: 4rem;
      fill: ${getColor(Color.Blue800)};
    }
  }
`
