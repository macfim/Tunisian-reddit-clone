import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

import { MenuH, MenuX } from "../icons";
import { toggleMobileMenu } from "../../slices/togglesSlice";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.toggles.menu);

  const toggleMenu = () => {
    dispatch(toggleMobileMenu());
  };

  const HamburgerMenu = styled.div`
    flex: 0 0 49px;
    height: 49px;
    margin-left: 1rem;
    cursor: pointer;
    border-radius: 15px;

    :hover {
      background: rgba(0, 0, 0, 0.05);
      transition: background ease-in-out 200ms;
    }
  `;

  return (
    <HamburgerMenu id="mobile-menu" onClick={toggleMenu}>
      {menuState ? <MenuX /> : <MenuH />}
    </HamburgerMenu>
  );
};

export default MobileMenu;
