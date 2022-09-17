import styled from "@emotion/styled";

import { Search } from '../icons';

const SearchBar = () => {
  const SearchWrapper = styled.div`
    height: 47px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    flex: 1 1 auto;

    display: grid;
    grid-template-columns: 47px 1fr;
    gap: .1rem;
  `;

  const SearchLogo = styled.div`
    
    padding-inline: .3rem;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: rgba(0, 0, 0, 0.05);
      transition: background ease-in-out 200ms;
    }
  `;

  const SearchInput = styled.input`
    height: 100%;
    border: none;
    background: none;
    font-size: 1.3rem;
    font-weight: thin;
    font-family: sans-serif;
    min-width: 100px;

    :focus {
      outline: none;
    }
  `;

  return (
    <SearchWrapper>
      <SearchLogo>
        <Search />
      </SearchLogo>
      <SearchInput placeholder="Search" />
    </SearchWrapper>
  );
};

export default SearchBar;
