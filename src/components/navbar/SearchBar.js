import styled from "@emotion/styled";

import { Search } from "../icons";
import { searchPost } from "../../reducers/postsReducer";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    search && dispatch(searchPost(search));

    e.target.search.value = "";
  };

  const SearchWrapper = styled.form`
    height: 47px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    flex: 1 1 auto;

    display: grid;
    grid-template-columns: 47px 1fr;
    gap: 0.1rem;
  `;

  const SearchLogo = styled.button`
    padding-inline: 0.3rem;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: none;
    background: none;

    & > svg {
      position: relative;
      z-index: 9999;
    }

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
    <SearchWrapper onSubmit={handleSearch}>
      <SearchLogo type="submit">
        <Search />
      </SearchLogo>
      <SearchInput name="search" placeholder="Search" />
    </SearchWrapper>
  );
};

export default SearchBar;
