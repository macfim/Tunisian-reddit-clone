import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";
import { togglePost } from "../../reducers/togglesReducer";

const PostToggle = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.toggles.post);

  const togglePostd = () => {
    dispatch(togglePost());
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
    <ToggleMenu onClick={togglePostd}>
      <span>post</span>
      <IconWrapper>{postState ? <ChevronDown /> : <ChevronUp />}</IconWrapper>
    </ToggleMenu>
  );
};

export default PostToggle;
