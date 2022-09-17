import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Up } from "./icons";

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

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
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

export default ScrollUp;
