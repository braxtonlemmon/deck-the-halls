export type ScheduleBlock = {
  date: string;
  activity: string;
  image: string;
};

export type DayType = {
  am: ScheduleBlock;
  pm: ScheduleBlock;
};
