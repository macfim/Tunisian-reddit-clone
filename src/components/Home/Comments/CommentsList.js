import styled from "@emotion/styled";

import Comment from "./Comment";

const CommentsList = ({ comments}) => {

  const List = styled.ul`
    border-left: 1px solid rgba(0,0,0,.2);
    margin-left: 1rem;
  `;

  return (
    <List>
      {comments.map((comment, i) => (
        <li style={{ textDecoration: "none", listStyle: "none" }} key={i}>
          <Comment comment={comment.data} />
        </li>
      ))}
    </List>
  );
};

export default CommentsList;