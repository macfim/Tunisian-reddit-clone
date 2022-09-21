import styled from "@emotion/styled";

import Comment from "./Comment";

const CommentsList = ({ comments, reply = false }) => {
  const List = styled.ul`
    margin-left: ${reply ? '1rem' : null};
    border-left: ${reply ? '1px solid rgba(0,0,0,.2)' : null};
  `;

  return (
    <List>
      {comments.map((comment, i) => (
        <li style={{ textDecoration: "none", listStyle: "none" }} key={i}>
          <Comment reply={reply} comment={comment.data} />
        </li>
      ))}
    </List>
  );
};

export default CommentsList;
