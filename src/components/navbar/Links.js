import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";
import { togglePost, toggleWiki } from "../../reducers/togglesReducer";

const Links = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.toggles.post);
  const wikiState = useSelector((state) => state.toggles.wiki);

  const togglePostd = () => {
    dispatch(togglePost());
  };
  const toggleWikid = () => {
    dispatch(toggleWiki());
  };

  const Links = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
  `;

  const ToggleMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    & > span {
      font-weight: normal;
      font-family: sans-serif;
    }
  `;

  const IconWrapper = styled.div`
    width: 1.8rem;
    height: 1.8rem;
  `;

  return (
    <Links>
      <ToggleMenu onClick={togglePostd}>
        <span>post</span>
        <IconWrapper>{postState ? <ChevronDown /> : <ChevronUp />}</IconWrapper>
      </ToggleMenu>
      <ToggleMenu onClick={toggleWikid}>
        <span>wiki</span>
        <IconWrapper>{wikiState ? <ChevronDown /> : <ChevronUp />}</IconWrapper>
      </ToggleMenu>
    </Links>
  );
};

export default Links;
