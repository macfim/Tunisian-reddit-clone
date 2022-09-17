import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const PostMenu = ({ content }) => {
  const Menu = styled.div`
    padding-inline: 0.875rem;
    padding-block: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 300;

    & > * {
      padding: 1rem;
      text-decoration: none;
      color: black;
      border-radius: 15px;

      :hover {
        background: rgba(0,0,0,.05);
        transition: background ease-in-out 200ms;
      }
    }
  `;

  return (
    <Menu>
      <Link to="/hot">hot</Link>
      <Link to="/new">new</Link>
      <Link to="/top">top</Link>
      <Link to="/rising">rising</Link>
    </Menu>
  );
};

export default PostMenu;
