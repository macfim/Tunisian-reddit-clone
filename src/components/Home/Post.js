import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Comments } from "../icons";

const Post = ({ post }) => {
  const [contentType, setContentType] = useState(null);
  const [postAge, setPostAge] = useState("");

  const {
    title,
    author,
    link_flair_text,
    link_flair_background_color,
    link_flair_text_color,
    selftext,
    url_overridden_by_dest,
    created_utc,
    num_comments,
  } = post;

  useEffect(() => {
    checkContentType();
    calculatePostAge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  function calculatePostAge() {
    const localUnixTimestamp = Math.floor(Date.now() / 1000);
    const newTimestamp = localUnixTimestamp - created_utc;

    const newDate = new Date(newTimestamp * 1000);
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let age = 0;

    if (hours === 0) {
      if (minutes === 0) {
        age = `${seconds}s`;
      } else {
        age = `${minutes}min`;
      }
    } else {
      age = `${hours}h`;
    }

    setPostAge(age);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function checkContentType() {
    if (url_overridden_by_dest) {
      if (url_overridden_by_dest.includes("youtu")) setContentType("video");
      else setContentType("image");
    } else if (selftext) setContentType("text");
  }

  const Post = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.375rem;
    padding-block: 1rem;
    padding-inline: 1rem;
    overflow: hidden;

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

  const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  `;

  const CommentWrapper = styled.div`
    background: black;
    height: 23px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      width: 1rem;
    }

    & > span {
      font-size: 0.6rem;
      color: black;
      margin-left: 0.3rem;
    }
  `;

  const PostAge = styled.span`
    font-size: 0.6rem;
    color: black;
  `;

  const Img = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <>
      <Post>
        <AuthorName>Posted by {author}</AuthorName>
        <Title>
          {link_flair_text && <Flair>{link_flair_text}</Flair>}
          {title}
        </Title>
        {contentType === "text" && <Content>{selftext}</Content>}
        {contentType === "image" && <Img alt="" src={url_overridden_by_dest} />}
        {contentType === "video" && (
          <YTVideo src={url_overridden_by_dest}></YTVideo>
        )}
        <Footer>
          <CommentWrapper>
            <Comments></Comments>
            <span>{num_comments} comments</span>
          </CommentWrapper>
          <PostAge>{`created ${postAge} ago`}</PostAge>
        </Footer>
      </Post>
    </>
  );
};

export default Post;
