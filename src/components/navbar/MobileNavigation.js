import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Links from "./Links";
import PostMenu from "./PostMenu";

const MobileNavigation = () => {
  const postState = useSelector((state) => state.toggles.post);
  const menuState = useSelector((state) => state.toggles.menu);

  const Navigation = styled.div`
    background: white;

    @media only screen and (min-width: 1000px) {
      display: none;
    }
  `;

  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 0.875rem;
    padding-block: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  `;

  const MenuLinks = styled.div`
    padding-inline: 0.875rem;
    padding-block: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  `;

  return (
    <Navigation>
      <Menu>
        <SearchBar />
        <MobileMenu />
      </Menu>
      {menuState && (
        <MenuLinks>
          <Links />
        </MenuLinks>
      )}
      {postState && menuState && <PostMenu />}
    </Navigation>
  );
};

export default MobileNavigation;
