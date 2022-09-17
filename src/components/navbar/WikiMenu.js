import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const WikiMenu = () => {
  const Menu = styled.div`
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-block: 1rem;
    padding-inline: 0.875rem;

    & > * {
      padding: 1rem;
      text-decoration: none;
      color: black;
      font-size: 1.8rem;
      border-radius: 15px;

      :hover {
        background: rgba(0, 0, 0, 0.05);
        transition: background ease-in-out 200ms;
      }
    }

    @media only screen and (min-width: 1000px) {
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      position: absolute;
      top: 4rem;
      margin-left: 4rem;
      padding-block: 0.5rem;
      padding-inline: 0;
      border: 1px solid rgba(0, 0, 0, 0.2);

      & > * {
        padding-block: 0;
      }
    }
  `;

  return (
    <Menu>
      <Link to="/wiki/index">index</Link>
      <Link to="/wiki/travel">travel</Link>
      <Link to="/wiki/culture">culture</Link>
      <Link to="/wiki/food">food</Link>
      <Link to="/wiki/faq">faq</Link>
    </Menu>
  );
};

export default WikiMenu;
