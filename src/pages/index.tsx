import React, { useState } from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../components/index/styles";
import Calendar from "../components/Calendar/Calendar";
import { H1 } from "../components/Headings";
import Snowfall from "react-snowfall";
import styled from "styled-components";
import useSound from "use-sound";
import christmasMusic from "../audio/christmas.mp3";

const Stretch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Intro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.five};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  height: 100px;
  width: 200px;
  background: ${(props) => props.theme.colors.two};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 8px rgba(255, 255, 255, 0.8);
    transform: scale(1.08);
  }
`;

const Title = styled(H1)`
  padding: 40px;
  background: ${(props) => props.theme.colors.four};
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 3.2em;
`;

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
              LET'S GOOOOOOO!
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
