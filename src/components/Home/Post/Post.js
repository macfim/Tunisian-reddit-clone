import styled from "@emotion/styled";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Post = ({ postId, index }) => {
  const Post = styled.li`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.375rem;
    padding-top: 1rem;
    padding-inline: 1rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: start;

    @media (hover: hover) {
      :hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        
      }
    }

    @media only screen and (min-width: 468px) {
      max-width: 40rem;
      margin-inline: auto;
    }
  `;

  return (
    <>
      <Post>
        <Header index={index} />
        <Body index={index} />
        <Footer index={index} />
      </Post>
    </>
  );
};

export default Post;
