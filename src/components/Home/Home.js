import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";

import PostList from "./PostList";

const Home = () => {

  const Home = styled.div``;

  const Wrapper = styled.div`
    position: relative;
    top: 11rem;
    padding-inline: 0.875rem;
    padding-bottom: 1rem;

    @media only screen and (min-width: 1000px) {
      top: 6rem;
    }
  `;

  return (
    <Home>
      <Wrapper>
        <Routes>
          <Route index element={<PostList />} />
          <Route path="/hot" element={<PostList post="hot" />} />
          <Route path="/new" element={<PostList post="new" />} />
          <Route path="/top" element={<PostList post="top" />} />
          <Route path="/rising" element={<PostList post="rising" />} />
          <Route path="/index" />
          <Route path="/travel" />
          <Route path="/culture" />
          <Route path="/food" />
          <Route path="/faq" />
          <Route path="*" element={<h1>welp</h1>} />
        </Routes>
      </Wrapper>
    </Home>
  );
};

export default Home;
