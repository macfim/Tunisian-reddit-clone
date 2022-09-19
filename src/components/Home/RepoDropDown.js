import styled from '@emotion/styled';
import { useState } from "react";
import { useDispatch } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";

import { getRepoPosts } from "../../Slices/postsSlice";

const RepoDropDown = (props) => {
  const { title, content } = props;
  const dispatch = useDispatch();
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (item) => {
    dispatch(getRepoPosts(item));
  };

  const DropDown = styled.div``;

  const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    user-select: none;

    & > svg {
      width: 1rem;
      height: 1rem;
    }

    :hover {
      background: rgba(0, 0, 0, 0.03);
    }
  `;

  const Content = styled.div`
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  `;

  const Item = styled.div`
    font-weight: 400;
    text-decoration: none;
    color: black;
    padding: 3px;

    :hover {
      background: rgba(0, 0, 0, 0.03);
    }
  `;

  return (
    <DropDown>
      <Title onClick={toggleVisibility}>
        {title}
        {isVisible ? <ChevronDown /> : <ChevronUp />}
      </Title>
      {isVisible && (
        <Content>
          {content.map((item, i) => (
            <Item onClick={() => handleClick(item)} key={i}>
              {item}
            </Item>
          ))}
        </Content>
      )}
    </DropDown>
  );
};

export default RepoDropDown;