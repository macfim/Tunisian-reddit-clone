import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { getPosts } from "../../Slices/postsSlice";

import Post from "./Post";
import Repos from "./Repos";
import LoadMoreButton from "./LoadMoreButton";
import SkeletonLoading from "./SkeletonLoading";

const PostsPage = ({ categorie }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts(categorie));
  }, [dispatch, location, categorie]);

  const Main = styled.div`
    display: flex;

    @media only screen and (min-width: 1000px) {
      justify-content: space-around;
    }
  `;

  const Info = styled.div`
    display: none;
    margin-left: 1rem;

    @media only screen and (min-width: 1000px) {
      display: block;
    }
  `;

  const PostsContainer = styled.div`
    width: 100%;

    @media only screen and (min-width: 1000px) {
      max-width: 43rem;
    }
  `;

  const PostsList = styled.ul``;

  const Error = styled.div`
    color: red;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  `;

  if (status === "failed") return <Error>{error}</Error>;

  return (
    <Main>
      <PostsContainer>
        {status === "loading" ? <SkeletonLoading /> : null}
        {status === "success" ? (
          <PostsList>
            {posts.map((post, i) => (
              <Post key={i} post={post.data} />
            ))}
          </PostsList>
        ) : null}
        <LoadMoreButton />
      </PostsContainer>
      <Info>
        <Repos />
      </Info>
    </Main>
  );
};

export default PostsPage;
