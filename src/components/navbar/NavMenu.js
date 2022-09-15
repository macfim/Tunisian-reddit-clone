import styled from '@emotion/styled';

const NavMenu = ({ content }) => {

  const Menu = styled.div`
    padding-inline: 0.875rem;
    padding-block: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 30px;
  `;

  const Item = styled.div`
    padding: 1rem;
    font-weight: 300;
  `;

  return (
    <Menu>
      {content.map((item, i) => (
        <Item key={i}>
          {item}
        </Item>
      ))}
    </Menu>
  );
};

export default NavMenu;