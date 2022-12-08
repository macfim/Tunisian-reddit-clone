import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Comment from "./Comment";
import { increaseCommentsShowLength } from "../../../sl1ces/postsSlice";

const CommentsList = ({ comments, reply = false, commentsShowLength, id }) => {
  const dispatch = useDispatch();
  const [isMoreComments, setIsMoreComments] = useState(true);

  useEffect(() => {
    if (commentsShowLength > comments.length || comments.length <= 9)
      setIsMoreComments(false);
  }, [commentsShowLength, comments.length]);

  const handleShowMoreComments = () => {
    dispatch(increaseCommentsShowLength(id));
  };

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
      {comments.slice(0, commentsShowLength).map((comment, i) => (
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
