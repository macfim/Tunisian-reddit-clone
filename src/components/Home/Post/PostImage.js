import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

import "react-lazy-load-image-component/src/effects/blur.css";

const PostImage = React.memo(({ url, thumbnail }) => {
  const ImageWrapper = styled.div`
    width: 100%;
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
        placeholder={<div>loading</div>}
        effect="blur"
      />
    </ImageWrapper>
  );
});

export default PostImage;
