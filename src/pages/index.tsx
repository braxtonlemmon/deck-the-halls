import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  Button,
  Intro,
  Stretch,
  Title,
  Wrapper,
} from "../components/index/styles";
import Calendar from "../components/Calendar/Calendar";
import Snowfall from "react-snowfall";
import useSound from "use-sound";
import christmasMusic from "../audio/christmas.mp3";

const IndexPage = ({ data }) => {
  const [showPage, setShowPage] = useState(false);
  const images = data.allFile.edges;
  const [playSound] = useSound(christmasMusic);
  return (
    <>
      <Wrapper>
        {!showPage && (
          <Intro>
            <Button
              onClick={() => {
                setShowPage(true);
                playSound();
              }}
            >
              LET'S GOOOOOOOO
            </Button>
          </Intro>
        )}
        {showPage && (
          <>
            <Stretch>
              <Snowfall speed={[1.0, 4.0]} />
            </Stretch>
            <Title>Deck the Halls 2021-2022</Title>
            <Calendar images={images} />
          </>
        )}
      </Wrapper>
    </>
  );
};

export const query = graphql`
  query ImageQuery {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 150, height: 150, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default IndexPage;
