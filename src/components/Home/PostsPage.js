import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { toggleMobileMenu } from "../../Slices/togglesSlice";
import { getPosts } from "../../Slices/postsSlice";
import { searchPosts } from "../../Slices/postsSlice";
import { getRepoPosts } from "../../Slices/postsSlice";
import { getTopSubreddits } from "../../Slices/postsSlice";

import PostList from "./PostList/PostList";
import Repos from "./Repos";
import LoadMoreButton from "./LoadMoreButton";
import SkeletonLoading from "./SkeletonLoading";
import TopSubreddits from "./TopSubreddits";
import Categories from "./Categories";

const PostsPage = ({ type, categorie }) => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const q = useParams()?.q;
  const subredditName = useParams()?.name;

  useEffect(() => {
    type === "index" && dispatch(getPosts(categorie));
    type === "search" && dispatch(searchPosts(q));
    type === "subreddit" && dispatch(getRepoPosts(subredditName));

    dispatch(toggleMobileMenu(false));
  }, [dispatch, type, q, categorie, subredditName]);

  useEffect(() => {
    dispatch(getTopSubreddits());
  }, [dispatch]);

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

  const Error = styled.div`
    color: red;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  `;

  if (status === "failed") return <Error>{error}</Error>;

  return (
    <>
      <Categories />
      <Main>
        <PostsContainer>
          {status === "loading" ? <SkeletonLoading /> : null}
          {status === "success" ? <PostList /> : null}
          {status === "success" ? <LoadMoreButton /> : null}
        </PostsContainer>
        <Info>
          <TopSubreddits />
          <Repos />
        </Info>
      </Main>
    </>
  );
};

export default PostsPage;
