import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { useState } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";

const PostImage = React.memo(({ url, thumbnail, scrollPosition }) => {
  const [showLarge, setShowLarge] = useState(false);

  const ImageWrapper = styled.div`
    aspect-ratio: 16/8;
    height: ${showLarge ? null : "25rem"};
    display: flex;
    justify-content: center;
    cursor: ${showLarge ? "default" : "pointer"};
  `;

  return (
    <ImageWrapper
      title={showLarge ? null : "click to make image larger"}
      onClick={() => setShowLarge((prev) => !prev)}
    >
      <LazyLoadImage
        alt="img"
        src={url}
        width={`${showLarge ? "100%" : "auto"}`}
        height={`${showLarge ? "auto" : "100%"}`}
        placeholderSrc={thumbnail}
        scrollPosition={scrollPosition}
        effect="blur"
      />
    </ImageWrapper>
  );
});

export default PostImage;
