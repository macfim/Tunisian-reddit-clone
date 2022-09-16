import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";
import { toggleWiki } from "../../reducers/togglesReducer";

const WikiToggle = () => {
  const dispatch = useDispatch();
  const wikiState = useSelector((state) => state.toggles.wiki);

  const toggleWikid = () => {
    dispatch(toggleWiki());
  };

  const ToggleMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    & > span {
      font-weight: 300;
    }
  `;

  const IconWrapper = styled.div`
    width: 1.8rem;
    height: 1.8rem;
  `;

  return (
    <ToggleMenu id="wiki-menu" onClick={toggleWikid}>
      <span>wiki</span>
      <IconWrapper>{wikiState ? <ChevronDown /> : <ChevronUp />}</IconWrapper>
    </ToggleMenu>
  );
};

export default WikiToggle;
