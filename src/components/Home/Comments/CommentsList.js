import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import Comment from "./Comment";

const CommentsList = ({ comments, reply = false }) => {
  const [length, setLength] = useState(8);
  const [isMoreComments, setIsMoreComments] = useState(true);

  useEffect(() => {
    if (comments.length <= length) setIsMoreComments((prev) => !prev);
  }, [length, comments.length]);

  const handleShowMoreComments = () => setLength((prev) => prev + 8);

  const List = styled.ul`
    margin-left: ${reply ? "1rem" : null};
    border-left: ${reply ? "1px solid rgba(0,0,0,.2)" : null};
  `;

  const Item = styled.li`
    list-style: none;
    text-decoration: none;
  `;

  const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    padding: 0.5rem;
    cursor: pointer;

    @media (hover: hover) {
      :hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  `;

  if (reply)
    return (
      <List>
        {comments.map((comment, i) => (
          <Item key={i}>
            <Comment reply={reply} comment={comment.data} />
          </Item>
        ))}
      </List>
    );

  return (
    <List>
      {comments.slice(0, length).map((comment, i) => (
        <Item key={i}>
          <Comment reply={reply} comment={comment.data} />
        </Item>
      ))}
      {isMoreComments ? (
        <Button onClick={handleShowMoreComments}>show more comments</Button>
      ) : null}
    </List>
  );
};

export default CommentsList;
