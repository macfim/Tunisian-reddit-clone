import styled from "@emotion/styled";

import PostToggle from "./PostToggle";

const Links = () => {
  const Links = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
  `;

  return (
    <Links>
      <PostToggle />
    </Links>
  );
};

export default Links;
