import styled from "@emotion/styled";

import RepoDropDown from "./RepoDropDown";

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
    margin-bottom: 2rem;

    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      {repos.map((item, i) => (
        <RepoDropDown key={i} title={item.title} content={item.content} />
      ))}
    </Wrapper>
  );
};

export default Repos;
