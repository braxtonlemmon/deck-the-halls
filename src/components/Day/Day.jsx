import React, { useCallback, useEffect, useState } from "react";
import { BottomRow, Divider, Overlay, Title, TopRow, Wrapper } from "./styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Day = ({ dayData, amImage, pmImage, today }) => {
  const [isToday, setIsToday] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  const getDate = useCallback(() => {
    const day = parseInt(dayData.am.date.split("-")[0]);
    const month = day < 20 ? "January" : "December";
    const year = day < 20 ? "2022" : "2021";
    const date = new Date(`${month} ${day}, ${year}`);
    return date;
  }, [dayData]);

  const getDateString = () => {
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
  const activityAm = dayData?.am?.activity ?? null;
  const activityPm = dayData?.pm?.activity ?? null;

  useEffect(() => {
    console.log(today.getDate());
    if (today.getDate() === parseInt(dayData.am.date.split("-")[0])) {
      setIsToday(true);
    }

    if (today.getDate() !== getDate().getDate() && today > getDate()) {
      setHasPassed(true);
    }
  }, [dayData, getDate, today]);

  return (
    <Wrapper isToday={isToday}>
      {hasPassed && <Overlay />}
      <Title>{getDateString()}</Title>
      <TopRow>
        {activityAm ? (
          <>
            <p>{activityAm}</p>
            {amImage && (
              <GatsbyImage image={getImage(amImage.node)} alt="blah" />
            )}
          </>
        ) : (
          <p>nada</p>
        )}
      </TopRow>
      <Divider />
      <BottomRow>
        {activityPm ? (
          <>
            {pmImage && (
              <GatsbyImage image={getImage(pmImage.node)} alt="blah" />
            )}
            <p>{activityPm}</p>
          </>
        ) : (
          <p>nada</p>
        )}
      </BottomRow>
    </Wrapper>
  );
};

export default Day;
