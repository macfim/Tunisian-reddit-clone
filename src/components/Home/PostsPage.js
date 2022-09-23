import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { toggleMobileMenu } from "../../Slices/togglesSlice";
import { getPosts } from "../../Slices/postsSlice";
import { searchPosts } from "../../Slices/postsSlice";
import { getRepoPosts } from "../../Slices/postsSlice";
import { Fire, New, Rising, Trophy } from "../icons";

import PostList from "./PostList/PostList";
import Repos from "./Repos";
import LoadMoreButton from "./LoadMoreButton";
import SkeletonLoading from "./SkeletonLoading";
import TopSubreddits from "./TopSubreddits";

const PostsPage = ({ type, categorie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const Categories = styled.div`
    max-width: 43rem;
    margin-inline: auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-block: 0.5rem;
    background: white;
    border-radius: 5px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }

    @media (hover: hover) {
      :hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  `;

  const Categorie = styled.div`
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.05);
    padding-inline: 0.3rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 400;

    & > svg {
      width: 2rem;
    }

    @media (hover: hover) {
      :hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  `;

  if (status === "failed") return <Error>{error}</Error>;

  return (
    <>
      <Categories>
        <Categorie onClick={() => navigate("/hot")}>
          <Fire />
          <span>hot</span>
        </Categorie>
        <Categorie onClick={() => navigate("/new")}>
          <New />
          <span>New</span>
        </Categorie>
        <Categorie onClick={() => navigate("/top")}>
          <Trophy />
          <span>Top</span>
        </Categorie>
        <Categorie onClick={() => navigate("/rising")}>
          <Rising />
          <span>Rising</span>
        </Categorie>
      </Categories>
      <Main>
        <PostsContainer>
          {status === "loading" ? <SkeletonLoading /> : null}
          {status === "success" ? <PostList /> : null}
          {status === "success" ? <LoadMoreButton /> : null}
        </PostsContainer>
        <Info>
          <Repos />
          <TopSubreddits />
        </Info>
      </Main>
    </>
  );
};

export default PostsPage;
