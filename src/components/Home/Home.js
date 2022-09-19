import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";

import PostsPage from "./PostsPage";

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
          <Route index element={<PostsPage />} />
          <Route path="/hot" element={<PostsPage categorie="hot" />} />
          <Route path="/new" element={<PostsPage categorie="new" />} />
          <Route path="/top" element={<PostsPage categorie="top" />} />
          <Route path="/rising" element={<PostsPage categorie="rising" />} />
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
