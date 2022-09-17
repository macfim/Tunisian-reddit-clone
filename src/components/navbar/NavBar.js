import styled from '@emotion/styled';

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {

  const NavBar = styled.div`
    position: absolute;
    width: 100%;
    z-index: 100;
  `;

  return (
    <NavBar>
      <Header />
      <MobileNavigation />
    </NavBar>
  );
};

export default NavBar;