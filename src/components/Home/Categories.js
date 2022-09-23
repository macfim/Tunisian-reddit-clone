import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Fire, New, Rising, Trophy } from "../icons";

const Categories = () => {
  const Categories = styled.div`
    max-width: 43rem;
    margin-inline: auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-block: 0.5rem;
    background: white;
    border-radius: 5px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }

    @media (hover: hover) {
      :hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  `;

  const Categorie = styled(Link)`
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.05);
    padding-inline: 0.3rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 400;
    color: black;
    text-decoration: none;

    & > svg {
      width: 2rem;
    }

    @media (hover: hover) {
      :hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  `;
  return (
    <Categories>
      <Categorie to="/hot">
        <Fire />
        <span>hot</span>
      </Categorie>
      <Categorie to="/new">
        <New />
        <span>New</span>
      </Categorie>
      <Categorie to="/top">
        <Trophy />
        <span>Top</span>
      </Categorie>
      <Categorie to="/rising">
        <Rising />
        <span>Rising</span>
      </Categorie>
    </Categories>
  );
};

export default Categories;
