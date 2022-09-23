import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { getTopSubreddits } from "../../Slices/postsSlice";
import Subreddit from "./Subreddit";

const TopSubreddits = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);

  const subreddits = useSelector((state) => state.posts.subreddits);
  const subredditsStatus = useSelector((state) => state.posts.subredditsStatus);
  const subredditsError = useSelector((state) => state.posts.subredditsError);

  useEffect(() => {
    dispatch(getTopSubreddits());
  }, [dispatch]);

  const getSubredditPosts = (name) => {
    navigate(`/subreddit/${name}`);
  };

  const handleShowMore = () => setShowMore((prev) => !prev);

  const Wrapper = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: none;
    width: 20rem;
    margin-bottom: 1.5rem;

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  `;

  const SubredditList = styled.ul`
    list-style: none;
  `;

  const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    cursor: pointer;

    @media (hover: hover) {
      :hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  `;

  const SubredditStyles = styled.div`
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    gap: 2rem;
  `;

  const Error = styled.div`
    color: red;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  `;

  if (subredditsStatus === "error" || !subreddits)
    return <Error>{subredditsError}</Error>;

  if (subredditsStatus === "loading")
    return (
      <Wrapper>
        <SubredditList>
          <SubredditStyles>
            <Skeleton width="3rem" height="3rem" circle />
            <Skeleton width="12rem" height="2rem" />
          </SubredditStyles>
          <SubredditStyles>
            <Skeleton width="3rem" height="3rem" circle />
            <Skeleton width="12rem" height="2rem" />
          </SubredditStyles>
          <SubredditStyles>
            <Skeleton width="3rem" height="3rem" circle />
            <Skeleton width="12rem" height="2rem" />
          </SubredditStyles>
          <SubredditStyles>
            <Skeleton width="3rem" height="3rem" circle />
            <Skeleton width="12rem" height="2rem" />
          </SubredditStyles>
        </SubredditList>
      </Wrapper>
    );

  return (
    <Wrapper>
      <SubredditList>
        {showMore
          ? subreddits.map((subreddit, i) => (
              <li
                key={i}
                onClick={() => getSubredditPosts(subreddit.data.display_name)}
              >
                <Subreddit subreddit={subreddit.data} />
              </li>
            ))
          : null}
        {!showMore
          ? subreddits.slice(0, 4).map((subreddit, i) => (
              <li
                key={i}
                onClick={() => getSubredditPosts(subreddit.data.display_name)}
              >
                <Subreddit subreddit={subreddit.data} />
              </li>
            ))
          : null}
      </SubredditList>
      <Button onClick={handleShowMore}>
        {showMore ? "hide" : "show more"}
      </Button>
    </Wrapper>
  );
};

export default TopSubreddits;
