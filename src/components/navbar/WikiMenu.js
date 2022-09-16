import styled from "@emotion/styled";

const WikiMenu = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 4rem;
    margin-left: 4rem;
    padding-block: 0.5rem;
  `;

  const Item = styled.div`
    cursor: pointer;
    width: 100%;
    padding-inline: 1rem;

    :hover {
      background: rgba(0, 0, 0, 0.05);
      transition: background ease-in-out 200ms;
    }
  `;

  return (
    <Wrapper>
      <Item>index</Item>
      <Item>travel</Item>
      <Item>culture</Item>
      <Item>food</Item>
      <Item>faq</Item>
    </Wrapper>
  );
};

export default WikiMenu;
