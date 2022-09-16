import styled from "@emotion/styled";

import PostToggle from "./PostToggle";
import WikiToggle from "./WikiToggle";

const Links = () => {
  const Links = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
  `;

  return (
    <Links>
      <PostToggle />
      <WikiToggle />
    </Links>
  );
};

export default Links;
