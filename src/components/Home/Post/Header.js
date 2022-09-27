import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const Header = ({ index }) => {
  const author = useSelector((state) => state.posts.posts[index].data.author);
  const link_flair_richtext = useSelector(
    (state) => state.posts.posts[index].data.link_flair_richtext
  );
  const title = useSelector((state) => state.posts.posts[index].data.title);
  const link_flair_text_color = useSelector(
    (state) => state.posts.posts[index].data.link_flair_text_color
  );
  const link_flair_background_color = useSelector(
    (state) => state.posts.posts[index].data.link_flair_background_color
  );

  const Author = styled.div`
    font-size: 0.75rem;
    color: var(--secondary-text);

    & > span {
      color: var(--secondary);
    }
  `;

  const Title = styled.h3`
    font-size: 20px;
    margin-block: 0.5rem;
  `;

  const Flair = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 0.7rem;
    color: ${link_flair_text_color};
    padding-inline: 0.5rem;
    padding-block: 0.1rem;
    border: 1px solid lightgrey;
    border-radius: 15px;
    margin-right: 0.3rem;
    background: ${link_flair_background_color};
  `;

  const Emoji = styled.img`
    width: 1.1rem;
    height: 1.1rem;
    margin-inline: 0.2rem;
  `;

  return (
    <>
      <Author>
        Posted by <span>{author}</span>
      </Author>
      <Title>
        {link_flair_richtext.length !== 0 && (
          <Flair>
            {link_flair_richtext.map((item, i) => (
              <span key={i}>
                {item.e === "text" && item.t}
                {item.e === "emoji" && <Emoji alt={item.a} src={item.u} />}
              </span>
            ))}
          </Flair>
        )}
        {title}
      </Title>
    </>
  );
};

export default Header;
