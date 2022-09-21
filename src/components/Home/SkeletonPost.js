import styled from "@emotion/styled";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const SkeletonPost = () => {
  const SkeletonPost = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.375rem;
    padding-block: 1rem;
    padding-inline: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: start;

    @media only screen and (min-width: 468px) {
      max-width: 40rem;
      margin-inline: auto;
    }
  `;

  const Title = styled.div`
    margin-top: 1rem;
  `;

  const TextContent = styled.div`
    margin-block: 1rem;
    with: 100%;
    aspect-ratio: 16/9;
  `;

  const Footer = styled.div`
    margin-top: auto;
  `;
  return (
    <SkeletonPost>
      <Skeleton width="5rem" />
      <Title>
        <SkeletonTheme height="1.5rem">
          <Skeleton width="100%" />
          <Skeleton width="45%" />
        </SkeletonTheme>
      </Title>
      <TextContent>
        <Skeleton width="100%" height="100%" />
      </TextContent>
      <Footer>
        <Skeleton width="48%" />
        <Skeleton width="38%" />
      </Footer>
    </SkeletonPost>
  );
};

export default SkeletonPost;
