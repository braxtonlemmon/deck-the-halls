import React from "react";
import scheduleData from "../../data/schedule.json";
import { DayType, ScheduleBlock } from "../../types/primary";
import { default as DayLine } from "../Day/Day";
import { Wrapper } from "./styles";

const Calendar = ({ images }) => {
  const parseData = (data: ScheduleBlock[]) => {
    let dayData = [];
    for (let i = 0; i < data.length; i += 2) {
      dayData.push({ am: data[i], pm: data[i + 1] });
    }
    return dayData;
  };

  const days = parseData(scheduleData);
  return (
    <Wrapper>
      {days.map((day: DayType) => {
        const amImage = images.find(
          (image) => image.node.name === day.am.image
        );
        const pmImage = images.find(
          (image) => image.node.name === day.pm.image
        );
        return <DayLine dayData={day} amImage={amImage} pmImage={pmImage} />;
      })}
    </Wrapper>
  );
};

export default Calendar;
