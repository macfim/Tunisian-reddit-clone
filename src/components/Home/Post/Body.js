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
  const is_video = useSelector(
    (state) => state.posts.posts[index].data.is_video
  );
  const post_hint = useSelector(
    (state) => state.posts.posts[index].data.post_hint
  );
  const fallback_url = useSelector(
    (state) => state.posts.posts[index].data?.media?.reddit_video?.fallback_url
  );

  fallback_url && console.log(fallback_url, is_video);

  const Content = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.3rem;
    mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
    max-height: 10rem;
    padding-bottom: 1rem;
    overflow: hidden;
  `;

  const Video = styled.video`
    background: lightgrey;
    width: 100%;
  `;
  return (
    <>
      {selftext ? <Content>{selftext}</Content> : null}
      {post_hint === "image" ? (
        <PostImage url={url_overridden_by_dest} thumbnail={thumbnail} />
      ) : null}
      {is_video ? <Video src={fallback_url} controls /> : null}
    </>
  );
};

export default Body;
