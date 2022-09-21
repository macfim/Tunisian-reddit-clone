import styled from "@emotion/styled";
import { useState } from "react";

import CommentsList from "./CommentsList";

const Comment = ({ comment, reply = false }) => {
  const { author, body, replies } = comment;
  const [repliesVisible, setRepliesVisible] = useState(false);

  const numberOfReplies = getNumberOfReplies();
  const isReplies =
    replies &&
    replies.data.children.length > 0 &&
    replies.data.children[0].kind === "t1";

  function getNumberOfReplies() {
    let r;

    if (replies) {
      r = replies.data.children.filter((item) => item.kind === "t1");
    } else r = 0;
    return r.length;
  }

  const toggleRepliesVisibility = () => setRepliesVisible(!repliesVisible);

  const Comment = styled.div`
    padding-top: 1rem;
    padding-bottom: .5rem;
    font-weight: 400;
    padding-inline: 0.5rem;
    // background: ${reply ? null : 'rgba(0,0,0,0.05)'};
    border-top: ${reply ? null : '1px solid rgba(0,0,0,0.2)'};
    border-bottom: ${reply ? null : '1px solid rgba(0,0,0,0.1)'};
    margin-bottom: ${reply ? null : '.5rem'};
  `;

  const Header = styled.div``;

  const Author = styled.div`
    font-size: 0.7rem;
    color: var(--secondary);
  `;

  const Body = styled.div`
    font-size: 0.9rem;
    margin-block: 0.5rem;
  `;

  const Button = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    color: var(--text);

    :hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `;

  if (!body) return null; 

  return (
    <Comment>
      <Header>
        <Author>{author}</Author>
      </Header>
      <Body>{body}</Body>
      {isReplies ? (
        <Button onClick={toggleRepliesVisibility}>
          {repliesVisible ? "hide" : `${numberOfReplies} more replies`}
        </Button>
      ) : null}
      {repliesVisible && isReplies ? (
        <CommentsList reply comments={replies.data.children} />
      ) : null}
    </Comment>
  );
};

export default Comment;
