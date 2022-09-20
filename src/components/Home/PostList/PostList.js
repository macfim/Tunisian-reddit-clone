import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import store from "../../../store";
import Post from "../Post/Post";

const PostList = () => {
  const posts = store.getState().posts.posts.map((item) => item.data.id);

  // eslint-disable-next-line
  const lastPost = useSelector((state) => state.posts.lastPost);

  const PostsList = styled.ul``;

  return (
    <PostsList>
      {posts.map((id, i) => (
        <Post key={i} postId={id} index={i} />
      ))}
    </PostsList>
  );
};

export default PostList;
