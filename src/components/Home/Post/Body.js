import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import PostImage from "./PostImage";

const Body = ({ index }) => {
  const selftext = useSelector(
    (state) => state.posts.posts[index].data.selftext
  );
  const url_overridden_by_dest = useSelector(
    (state) => state.posts.posts[index].data.url_overridden_by_dest
  );
  const thumbnail = useSelector(
    (state) => state.posts.posts[index].data.thumbnail
  );
  const isVideo = useSelector((state) => state.posts.posts[index].data.isVideo);
  const post_hint = useSelector(
    (state) => state.posts.posts[index].data.post_hint
  );

  const Content = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.3rem;
    mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
    max-height: 10rem;
    padding-bottom: 1rem;
    overflow: hidden;
  `;

  const Video = styled.iframe`
    background: lightgrey;
    aspect-ratio: 16/9;
    border: 1px solid red;
    width: 100%;
  `;
  return (
    <>
      {selftext ? <Content>{selftext}</Content> : null}
      {post_hint === "image" ? (
        <PostImage url={url_overridden_by_dest} thumbnail={thumbnail} />
      ) : null}
      {isVideo ? <Video src={url_overridden_by_dest}></Video> : null}
    </>
  );
};

export default Body;
