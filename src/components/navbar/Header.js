import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Header = () => {
  const Header = styled.div`
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-inline: 0.875rem;
    padding-block: 1.125rem;

    @media only screen and (min-width: 1000px) {
      justify-content: start;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 1000px) {
      max-width: 112rem;
      margin-inline: auto;
    }
  `;

  const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: "VAG Rounded", sans-serif;

    & > * {
      text-decoration: none;
      color: black;
    }

    @media only screen and (min-width: 1000px) {
      justify-content: start;
      display: inline-flex;
      width: auto;
      flex: 0 0 auto;
    }
  `;

  const Logo = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    cursor: pointer;

    @media only screen and (min-width: 1000px) {
      margin-right: 1rem;
    }
  `;

  const Flag = styled.img`
    height: 39px;
    width: 43px;
    color: red;
  `;

  const LSearchWrapper = styled.div`
    display: none;
    // max-width: 40rem;
    flex: 1 1 auto;
    margin-inline: 3rem;

    @media only screen and (min-width: 1000px) {
      display: inline-flex;
    }
  `;

  const LMenu = styled.div`
    display: none;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;

    & > img {
      height: 2.5rem;
      width: auto;
    }

    @media only screen and (min-width: 1000px) {
      display: flex;
    }
  `;

  return (
    <Header>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo>lightreddit</Logo>
          </Link>
          <Flag src="/images/logo.png" alt="logoImg" />
        </LogoWrapper>
        <LSearchWrapper>
          <SearchBar />
        </LSearchWrapper>
        <LMenu>
          <img src="/images/logo.webp" alt="country-logo" />
        </LMenu>
      </Wrapper>
    </Header>
  );
};

export default Header;
