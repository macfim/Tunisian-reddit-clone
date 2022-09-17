import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [contentType, setContentType] = useState(null);

  const {
    title,
    author_fullname,
    link_flair_text,
    link_flair_background_color,
    link_flair_text_color,
    selftext,
    url_overridden_by_dest,
    url,
    created,
  } = post;

  const checkContentType = () => {
    if (url_overridden_by_dest) {
      if (url_overridden_by_dest.includes("youtu")) setContentType("video");
      else setContentType("image");
    } else if (selftext) setContentType("text");
  };

  useEffect(() => {
    checkContentType();
  }, [checkContentType]);

  const Post = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.375rem;
    padding-block: 1rem;
    padding-inline: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: start;

    @media (hover: hover) {
      :hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
  `;

  const AuthorName = styled.div`
    font-size: 0.75rem;
    color: grey;
  `;

  const Flair = styled.div`
    display: inline-block;
    font-size: 0.7rem;
    color: ${link_flair_text_color};
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
    border: 1px solid lightgrey;
    border-radius: 15px;
    margin-right: 0.3rem;
    background: ${link_flair_background_color};
  `;

  const Title = styled.h3`
    font-size: 20px;
    margin-block: 0.5rem;
  `;

  const Content = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.3rem;
    mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
    max-height: 10rem;
    padding-bottom: 1rem;
    overflow: hidden;
  `;

  const YTVideo = styled.iframe`
    background: lightgrey;
    aspect-ratio: 16/9;
    border: 1px solid red;
    width: 100%;
  `;

  return (
    <Post>
      <AuthorName>Posted by {author_fullname}</AuthorName>
      <Title>
        {link_flair_text && <Flair>{link_flair_text}</Flair>}
        {title}
      </Title>
      {contentType === "text" && <Content>{selftext}</Content>}
      {contentType === "image" && <img src={url_overridden_by_dest} />}
      {contentType === "video" && (
        <YTVideo src={url_overridden_by_dest}></YTVideo>
      )}
    </Post>
  );
};

export default Post;
