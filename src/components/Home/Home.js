import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";

import PostsPage from "./PostsPage";

const Home = () => {
  const Home = styled.div``;

  const Wrapper = styled.div`
    position: relative;
    top: 11rem;
    padding-bottom: 1rem;

    @media only screen and (min-width: 480px) {
      padding-inline: 1rem;
    }

    @media only screen and (min-width: 768px) {
      padding-inline: 4rem;
    }

    @media only screen and (min-width: 1000px) {
      top: 6rem;
      padding-inline: 1rem;
    }
  `;

  return (
    <Home>
      <Wrapper>
        <Routes>
          <Route index element={<PostsPage type="index" categorie="hot" />} />

          <Route
            path="/hot"
            element={<PostsPage type="index" categorie="hot" />}
          />
          <Route
            path="/top"
            element={<PostsPage type="index" categorie="top" />}
          />
          <Route
            path="/rising"
            element={<PostsPage type="index" categorie="rising" />}
          />
          <Route
            path="/new"
            element={<PostsPage type="index" categorie="new" />}
          />

          <Route path="/search/:q" element={<PostsPage type="search" />} />

          <Route
            path="/subreddit/:name"
            element={<PostsPage type="subreddit" />}
          />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Wrapper>
    </Home>
  );
};

export default Home;
