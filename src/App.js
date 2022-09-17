import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home/Home";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Up } from "./components/icons";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const top = 500;

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Wrapper = styled.div`
    background: white;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
  `;

  return (
    <>
      {visible && (
        <Wrapper onClick={scrollToTop}>
          <Up />
        </Wrapper>
      )}
    </>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <ScrollUp />
    </div>
  );
};

export default App;
