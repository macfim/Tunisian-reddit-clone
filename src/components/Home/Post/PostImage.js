import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const PostImage = React.memo(({ url, thumbnail }) => {
  return (
    <LazyLoadImage
      alt="img"
      src={url}
      width="100%"
      height="auto"
      placeholderSrc={thumbnail}
      style={{ minHeight: "10rem" }}
    />
  );
});

export default PostImage;
