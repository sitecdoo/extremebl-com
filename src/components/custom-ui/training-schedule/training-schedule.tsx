import React from "react";
import Typography from "../typography";
import { Separator } from "../../ui/separator";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/utils/dictionary";

const TrainingSchedule = ({
  dict,
}: {
  dict: Pick<Dictionary, "schedule" | "days">;
}) => {
  const schedule = {
    [dict.days.monday]: {
      activities: [
        { name: dict.schedule.youngerChildren, time: "19:00 - 20:00h" },
        { name: dict.schedule.olderChildren, time: "19:30 - 21:00h" },
      ],
    },
    [dict.days.tuesday]: {
      activities: [{ name: dict.schedule.adultsFree, time: "19:00 - 22:00h" }],
    },
    [dict.days.wednesday]: {
      activities: [
        { name: dict.schedule.adultsGroup, time: "19:00 - 22:00h" },
        { name: dict.schedule.adultsFree, time: "19:00 - 22:00h" },
      ],
    },
    [dict.days.thursday]: {
      activities: [{ name: dict.schedule.adultsFree, time: "19:00 - 22:00h" }],
    },
    [dict.days.friday]: {
      activities: [
        { name: dict.schedule.youngerChildren, time: "19:00 - 20:00h" },
        { name: dict.schedule.olderChildren, time: "19:30 - 21:00h" },
      ],
    },
    [dict.days.saturday]: {
      activities: [{ name: dict.schedule.nonWorking, time: "" }],
    },
    [dict.days.sunday]: {
      activities: [
        { name: dict.schedule.adultsGroup, time: "19:00 - 22:00h" },
        { name: dict.schedule.adultsFree, time: "19:00 - 22:00h" },
      ],
    },
  };

  const colorMap: Record<string, string> = {
    [dict.schedule.youngerChildren]: "bg-yellow-400",
    [dict.schedule.olderChildren]: "bg-orange-400",
    [dict.schedule.adultsGroup]: "bg-purple-400",
    [dict.schedule.adultsFree]: "bg-blue-100",
  };

  return (
    <div className="flex w-full flex-col gap-4 sm:items-center">
      <Typography
        variant="h2"
        tag="h2"
        fontWeight="bold"
        className="text-center"
      >
        {dict.schedule.title}
      </Typography>
      <div className="grid grid-flow-row gap-6 rounded-2xl bg-neutrals-100 p-2 sm:grid-cols-4 sm:p-3 xl:grid-cols-7 xl:p-16">
        {Object.entries(schedule).map(([day, { activities }]) => (
          <div
            className="flex flex-col justify-between rounded-xl bg-neutral-50 p-2"
            key={day}
          >
            <Typography
              variant="body"
              tag="h4"
              fontWeight="bold"
              className="pb-3 capitalize sm:text-center"
            >
              {day}
            </Typography>
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-md px-2 py-2 sm:min-h-[130px] sm:flex-col sm:justify-center",
                    colorMap[activity.name] || "bg-gray-200",
                  )}
                >
                  <Typography
                    tag="span"
                    variant="body-sm"
                    className="text-center"
                  >
                    {activity.name}
                  </Typography>

                  <span className="flex items-center gap-2">
                    <Separator
                      orientation="vertical"
                      className="h-5 bg-neutrals-800 sm:hidden"
                    />
                    <Typography tag="span" variant="caption" fontWeight="bold">
                      {activity.time}
                    </Typography>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSchedule;
