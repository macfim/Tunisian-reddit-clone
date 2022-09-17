import styled from "@emotion/styled";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const SkeletonPost = () => {
  const SkeletonPost = styled.div`
    background: white;
    height: 25rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.375rem;
    padding-block: 1rem;
    padding-inline: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
  `;

  const Title = styled.div`
    margin-block: 1rem;
  `;

  const TextContent = styled.div``;

  const Footer = styled.div`
    margin-top: auto;
  `;
  return (
    <SkeletonPost>
      <Skeleton width="5rem" />
      <Title>
        <SkeletonTheme height="1.2rem">
          <Skeleton width="100%" />
          <Skeleton width="45%" />
        </SkeletonTheme>
      </Title>
      <TextContent>
        <Skeleton width="80%" />
        <Skeleton width="90%" />
        <Skeleton width="77%" />
        <Skeleton width="54%" />
        <Skeleton width="88%" />
        <Skeleton width="66%" />
        <Skeleton width="98%" />
        <Skeleton width="88%" />
        <Skeleton width="77%" />
        <Skeleton width="56%" />
        <Skeleton width="66%" />
      </TextContent>
      <Footer>
        <Skeleton width="48%" />
        <Skeleton width="38%" />
      </Footer>
    </SkeletonPost>
  );
};

export default SkeletonPost;
