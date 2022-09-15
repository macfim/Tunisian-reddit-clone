import styled from "@emotion/styled";

const Header = () => {
  const Header = styled.div`
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-inline: 0.875rem;
    padding-block: 1.125rem;
    font-family: "VAG Rounded";

    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Logo = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    cursor: pointer;
  `;

  const Flag = styled.img`
    height: 39px;
  `;

  return (
    <Header>
      <Logo>TunisiaReddit</Logo>
      <div>
        <Flag src="images/logo.webp" />
      </div>
    </Header>
  );
};

export default Header;