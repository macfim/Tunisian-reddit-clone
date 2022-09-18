import styled from "@emotion/styled";
import Post from "./Post";
import SkeletonLoading from "./SkeletonLoading";

const List = ({posts}) => {

  const List = styled.div`
    width: 100%;

    @media only screen and (min-width: 1000px) {
      max-width: 43rem;
    }
  `;
  console.log('re')
  return (
    <List>
      {posts.length !== 0 ? (
        <>
          {posts.map((post, i) => (
            <Post key={i} post={post.data} />
          ))}
        </>
      ) : (
        <SkeletonLoading />
      )}
    </List>
  );
};

export default List;