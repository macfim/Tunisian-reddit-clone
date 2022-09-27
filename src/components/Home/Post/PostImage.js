import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const PostImage = React.memo(({ url, thumbnail }) => {
  const ImageWrapper = styled.div`
    min-height: 20rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `;

  return (
    <ImageWrapper>
      <LazyLoadImage
        alt="img"
        src={url}
        width="100%"
        placeholderSrc={thumbnail}
      />
    </ImageWrapper>
  );
});

export default PostImage;
