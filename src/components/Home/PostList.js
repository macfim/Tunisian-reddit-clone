import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Post from "./Post";
import Repos from "./Repos";
import SkeletonLoading from "./SkeletonLoading";
import {
  fetchAll,
  searchPost,
  searchRepoPosts,
} from "../../reducers/postsReducer";
import { toggleMobileMenu } from "../../reducers/togglesReducer";

const PostList = ({ post }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menuState = useSelector((state) => state.toggles.menu);

  const [reFetchCount, setReFetchCount] = useState(0);

  const {
    posts,
    lastPost,
    isLoadingNewData,
    error,
    maxLoadNewData,
    currentDataType,
    lastSearch,
    lastRepo,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAll(post));
    if (menuState) dispatch(toggleMobileMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, reFetchCount]);

  const handleLoadMore = () => {
    console.log(currentDataType);
    if (currentDataType === "default") dispatch(fetchAll(post, lastPost));
    else if (currentDataType === "repo")
      dispatch(searchRepoPosts(lastRepo, "reload", lastPost));
    else dispatch(searchPost(lastSearch, "reload", lastPost));
  };

  const LoadMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  `;

  const Button = styled.div`
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: white;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  `;

  const ErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Error = styled.div`
    font-size: 1.3rem;
    color: red;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `;

  const Main = styled.div`
    display: flex;

    @media only screen and (min-width: 1000px) {
      justify-content: space-around;
    }
  `;

  const List = styled.div`
    width: 100%;

    @media only screen and (min-width: 1000px) {
      max-width: 43rem;
    }
  `;

  const Info = styled.div`
    display: none;
    margin-left: 1rem;

    @media only screen and (min-width: 1000px) {
      display: block;
    }
  `;

  if (error)
    return (
      <ErrorPage>
        <Error>{error}</Error>
        <Button onClick={() => setReFetchCount(reFetchCount + 1)}>
          Try Again
        </Button>
        {reFetchCount}
      </ErrorPage>
    );

  return (
    <>
      <Main>
        <List>
          {posts.length !== 0 ? (
            <>
              {posts.map((post, i) => (
                <Post key={i} post={post.data} />
              ))}
            </>
          ) : (
            <SkeletonLoading />
          )}
        </List>
        <Info>
          <Repos />
        </Info>
      </Main>
      {!maxLoadNewData && (
        <LoadMore>
          <Button onClick={handleLoadMore}>
            {!isLoadingNewData ? "LoadMore" : "Loading"}
          </Button>
        </LoadMore>
      )}
    </>
  );
};

export default PostList;
