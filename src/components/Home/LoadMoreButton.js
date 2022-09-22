import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

import { loadMore } from "../../Slices/postsSlice";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const loadMoreStatus = useSelector((state) => state.posts.loadMoreStatus);
  const loadMoreError = useSelector((state) => state.posts.loadMoreError);

  const handleClick = () => dispatch(loadMore());

  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 468px) {
      max-width: 40rem;
      margin-inline: auto;
    }
  `;

  const Button = styled.button`
    width: 100%;
    padding-block: 0.8rem;
    font-size: 1rem;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: black;

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  `;

  const ErrorMessage = styled.div`
    padding-block: 1rem;
    color: red;
    font-weight: 400;
    font-size: 1.1rem;
    text-transform: uppercase;
  `;

  return (
    <ButtonWrapper>
      <Button onClick={handleClick}>
        {loadMoreStatus === "loading" ? "Loading" : "LoadMore"}
      </Button>
      <ErrorMessage>{loadMoreError ? loadMoreError : null}</ErrorMessage>
    </ButtonWrapper>
  );
};

export default LoadMoreButton;
