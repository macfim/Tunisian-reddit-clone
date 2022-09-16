import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import WikiToggle from "./WikiToggle";
import WikiMenu from './WikiMenu';

const Header = () => {

  const wikiState = useSelector((state) => state.toggles.wiki);

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
    font-family: "VAG Rounded";

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
  `;

  const LSearchWrapper = styled.div`
    display: none;
    width: 30rem;
    flex: 1 1 auto;
    margin-inline: 3rem;

    @media only screen and (min-width: 1000px) {
      display: inline-flex;
    }
  `;

  const LMenu = styled.div`
    display: none;
    font-size: 30px;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;

    @media only screen and (min-width: 1000px) {
      display: flex;
    }
  `;

  const PostLink = styled.div`
    cursor: pointer;
    margin-right: 3rem;
  `;

  return (
    <Header>
      <Wrapper>
        <LogoWrapper>
          <Logo>TunisiaReddit</Logo>
          <Flag src="images/logo.webp" />
        </LogoWrapper>
        <LSearchWrapper>
          <SearchBar />
        </LSearchWrapper>
        <LMenu>
          <PostLink>
            post
          </PostLink>
          <WikiToggle />
          {wikiState && <WikiMenu />}
        </LMenu>
      </Wrapper>
    </Header>
  );
};

export default Header;
