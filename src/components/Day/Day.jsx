import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { DayType } from "../../types/primary";
import { H2 } from "../Headings";
import { BottomRow, Divider, TopRow, Wrapper } from "./styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Day = ({ dayData, amImage, pmImage }) => {
  const getDate = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = parseInt(dayData.am.date.split("-")[0]);
    const month = day < 20 ? "January" : "December";
    const year = day < 20 ? "2022" : "2021";
    const date = new Date(`${month} ${day}, ${year}`);
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${dayOfWeek} ${month} ${day}, ${year}`;
  };
  const activityAm = dayData.am.activity;
  const activityPm = dayData.pm.activity;
  console.log(amImage);
  return (
    <Wrapper>
      <H2>{getDate()}</H2>
      <TopRow>
        <p>{activityAm}</p>
        <GatsbyImage image={getImage(amImage.node)} alt="blah" />
      </TopRow>
      <Divider />
      <BottomRow>
        <GatsbyImage image={getImage(pmImage.node)} alt="blah" />
        <p>{activityPm}</p>
      </BottomRow>
    </Wrapper>
  );
};

export default Day;
