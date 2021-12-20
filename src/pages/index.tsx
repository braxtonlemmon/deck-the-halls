import React from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../components/index/styles";
import Calendar from "../components/Calendar/Calendar";
import { H1 } from "../components/Headings";
import Snowfall from "react-snowfall";

const IndexPage = ({ data }) => {
  const images = data.allFile.edges;

  return (
    <Wrapper>
      <Snowfall speed={[1.0, 4.0]} />
      <H1>Deck the Halls 2021-2022</H1>
      <Calendar images={images} />
    </Wrapper>
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
