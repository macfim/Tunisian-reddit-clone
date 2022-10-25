import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

import CommentsList from "./CommentsList";
import { dateCalculator } from "../../../utils/postRelated";
import { toggleShowReplies } from "../../../slices/postsSlice";

const Comment = ({ comment, reply = false }) => {
  const dispatch = useDispatch();
  const { id, author, body, replies, created, showReplies } = comment;

  const commentAge = dateCalculator(created);

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

  const toggleRepliesVisibility = () => dispatch(toggleShowReplies(id));

  const Comment = styled.div`
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-weight: 400;
    padding-inline: 0.5rem;
    margin-bottom: ${reply ? null : ".5rem"};
  `;

  const Header = styled.div``;

  const Author = styled.div`
    font-size: 0.7rem;
    color: var(--secondary);

    & > span:nth-of-type(1) {
      color: black;
    }

    & > span:nth-of-type(2) {
      color: black;
      font-size: 0.6rem;
    }
  `;

  const Body = styled.div`
    font-size: 0.9rem;
    margin-block: 0.5rem;
  `;

  const Button = styled.button`
    background: none;
    width: 100%;
    text-align: left;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    color: var(--text);
    background: rgba(0, 0, 0, 0.02);
    border-radius: 5px;

    @media (hover: hover) {
      :hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }

    :active {
      background: rgba(0, 0, 0, 0.05);
    }
  `;

  if (!body) return null;

  return (
    <Comment>
      <Header>
        <Author>
          {author} <span> | </span> <span>{commentAge}</span>
        </Author>
      </Header>
      <Body>{body}</Body>
      {isReplies ? (
        <Button onClick={toggleRepliesVisibility}>
          {showReplies ? "hide" : `${numberOfReplies} more replies`}
        </Button>
      ) : null}
      {showReplies && isReplies ? (
        <CommentsList reply comments={replies.data.children} />
      ) : null}
    </Comment>
  );
};

export default Comment;
