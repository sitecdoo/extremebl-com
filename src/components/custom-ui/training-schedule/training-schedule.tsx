import React from "react";
import Typography from "../typography";
import { Separator } from "../../ui/separator";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/utils/dictionary";

const TrainingSchedule = ({
  dict,
}: {
  dict: Dictionary["trainingSchedule"];
}) => {
  const schedule = {
    [dict.monday.title]: {
      activities: [
        { name: dict.monday.schedule1, time: "19:00 - 20:00h" },
        { name: dict.monday.schedule2, time: "19:30 - 21:00h" },
      ],
    },
    [dict.tuesday.title]: {
      activities: [{ name: dict.thursday.schedule1, time: "19:00 - 22:00h" }],
    },
    [dict.wednesday.title]: {
      activities: [
        { name: dict.wednesday.schedule1, time: "19:00 - 22:00h" },
        { name: dict.wednesday.schedule2, time: "19:00 - 22:00h" },
      ],
    },
    [dict.thursday.title]: {
      activities: [{ name: dict.thursday.schedule1, time: "19:00 - 22:00h" }],
    },
    [dict.friday.title]: {
      activities: [
        { name: dict.friday.schedule1, time: "19:00 - 20:00h" },
        { name: dict.friday.schedule2, time: "19:30 - 21:00h" },
      ],
    },
    [dict.saturday.title]: {
      activities: [{ name: dict.saturday.schedule1, time: "" }],
    },
    [dict.sunday.title]: {
      activities: [
        { name: dict.sunday.schedule1, time: "19:00 - 22:00h" },
        { name: dict.sunday.schedule2, time: "19:00 - 22:00h" },
      ],
    },
  };

  const colorMap: Record<string, string> = {
    [dict.monday.schedule1]: "bg-yellow-400",
    [dict.monday.schedule2]: "bg-orange-400",
    [dict.wednesday.schedule1]: "bg-purple-400",
    [dict.thursday.schedule1]: "bg-blue-100",
  };

  return (
    <div className="flex w-full flex-col gap-4 sm:items-center">
      <Typography
        variant="h2"
        tag="h2"
        fontWeight="bold"
        className="text-center"
      >
        {dict.title}
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
