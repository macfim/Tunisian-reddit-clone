import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";

import { getRepoPosts } from "../../Slices/postsSlice";

const DropDown = (props) => {
  const { title, content } = props;
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (item) => {
    dispatch(getRepoPosts(item));
  };

  const DropDown = styled.div``;

  const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    user-select: none;

    & > svg {
      width: 1rem;
      height: 1rem;
    }

    :hover {
      background: rgba(0, 0, 0, 0.03);
    }
  `;

  const Content = styled.div`
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  `;

  const Item = styled.div`
    font-weight: 400;
    text-decoration: none;
    color: black;
    padding: 3px;

    :hover {
      background: rgba(0, 0, 0, 0.03);
    }
  `;

  return (
    <DropDown>
      <Title onClick={toggleVisibility}>
        {title}
        {isVisible ? <ChevronDown /> : <ChevronUp />}
      </Title>
      {isVisible && (
        <Content>
          {content.map((item, i) => (
            <Item onClick={() => handleClick(item)} key={i}>
              {item}
            </Item>
          ))}
        </Content>
      )}
    </DropDown>
  );
};

const Repos = () => {
  const repos = [
    {
      title: "popular communities",
      content: [
        "AskReddit",
        "NoStupidQuestions",
        "DestinyTheGame",
        "explainlikeimfive",
        "AskMen",
        "leagueoflegends",
        "Minecraft",
      ],
    },
    {
      title: "gaming",
      content: [
        "StardewValley",
        "FortniteCompetitive",
        "Warframe",
        "totalwar",
        "Fallout",
        "RocketLeague",
        "fo76",
        "yugioh",
        "eu4",
      ],
    },
    {
      title: "sports",
      content: [
        "running",
        "soccer",
        "bjj",
        "MMA",
        "hockey",
        "formula1",
        "CFB",
        "bartoolsports",
        "airsoft",
        "rugbyunion",
        "golf",
        "MTB",
        "cycling",
      ],
    },
    {
      title: "tv",
      content: [
        "Naruto",
        "BokuNoHeroAcademia",
        "marvelstudios",
        "rupaulsdragrace",
        "90DayFiance",
        "dbz",
        "Boruto",
      ],
    },
    {
      title: "travel",
      content: [
        "vancouver",
        "brasil",
        "australia",
        "mexico",
        "argentina",
        "melbourne",
        "ottawa",
        "korea",
        "ireland",
        "travel",
        "Calgary",
        "portugal",
      ],
    },
    {
      title: "health & fitness",
      content: [
        "orangetheory",
        "bodybuilding",
        "bodyweightfitness",
        "vegan",
        "crossfit",
        "nattyorjuice",
        "EatCheapAndHealthy",
        "loseit",
      ],
    },
    {
      title: "fashion",
      content: [
        "MakeupAddiction",
        "Watches",
        "BeautyGuruChatter",
        "femalefashionadvice",
        "frugalmalefashion",
        "curlyhair",
        "poshmark",
      ],
    },
  ];

  const Wrapper = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: none;
    width: 20rem;
    margin-bottom: 4rem;

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      {repos.map((item, i) => (
        <DropDown key={i} title={item.title} content={item.content} />
      ))}
    </Wrapper>
  );
};

export default Repos;
