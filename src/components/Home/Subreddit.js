import styled from "@emotion/styled";

const Subreddit = ({ subreddit }) => {
  const { display_name, header_img, primary_color } = subreddit;

  const SubbredditContainer = styled.div`
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      background: rgba(0, 0, 0, 0.03);
    }
  `;

  const Title = styled.div`
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  `;

  const LogoWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-image: ${header_img
      ? `url(${header_img})`
      : 'url("/images/logo.png")'};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: ${primary_color ? primary_color : "rgba(0,0,0,.05)"};
    border-radius: 50%;
  `;

  return (
    <SubbredditContainer>
      <LogoWrapper title="welp" />
      <Title>{display_name}</Title>
    </SubbredditContainer>
  );
};

export default Subreddit;
