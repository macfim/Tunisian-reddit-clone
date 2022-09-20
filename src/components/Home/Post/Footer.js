import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { CommentsI } from "../../icons";
import Comments from "../Comments/Comments";

const Footer = ({ index }) => {
  const id = useSelector((state) => state.posts.posts[index].data.id);
  const permalink = useSelector(
    (state) => state.posts.posts[index].data.permalink
  );
  const num_comments = useSelector(
    (state) => state.posts.posts[index].data.num_comments
  );
  const comments = useSelector(
    (state) => state.posts.posts[index].data.comments
  );
  const commentsError = useSelector(
    (state) => state.posts.posts[index].data.commentsError
  );
  const commentsStatus = useSelector(
    (state) => state.posts.posts[index].data.commentsStatus
  );
  const created_utc = useSelector(
    (state) => state.posts.posts[index].data.created_utc
  );

  const [postAge, setPostAge] = useState("");

  useEffect(() => {
    setPostAge(calculatePostAge(created_utc));
  }, [created_utc]);

  const Footer = styled.div`
    margin-top: 0.5rem;
  `;

  const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const CommentWrapper = styled.div`
    background: black;
    height: 23px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      width: 1rem;
    }

    & > span {
      font-size: 0.6rem;
      color: black;
      margin-left: 0.3rem;
    }
  `;

  const PostAge = styled.span`
    font-size: 0.6rem;
    color: black;
  `;
  return (
    <Footer>
      <PostInfo>
        <CommentWrapper>
          <CommentsI />
          <span>{num_comments} comments</span>
        </CommentWrapper>
        <PostAge>{`created ${postAge} ago`}</PostAge>
      </PostInfo>
      <Comments
        id={id}
        permalink={permalink}
        comments={comments}
        commentsStatus={commentsStatus}
        commentsError={commentsError}
      />
    </Footer>
  );
};

function calculatePostAge(created_utc) {
  const localUnixTimestamp = Math.floor(Date.now() / 1000);
  const newTimestamp = localUnixTimestamp - created_utc;

  const newDate = new Date(newTimestamp * 1000);
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  let age = 0;

  if (hours === 0) {
    if (minutes === 0) {
      age = `${seconds}s`;
    } else {
      age = `${minutes}min`;
    }
  } else {
    age = `${hours}h`;
  }

  return age;
}

export default Footer;
