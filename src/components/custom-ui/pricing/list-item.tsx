import React from "react";
import Typography from "../typography";
import { Separator } from "@/components/ui/separator";

type ListItemProps = {
  title: string;
  data: {
    day: string;
    time: string;
  }[];
};

const ListItem = ({ title, data }: ListItemProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Typography fontWeight="bold">{title}</Typography>
      <div className="flex w-full flex-col gap-2">
        {data.map((item, index) => (
          <div className="flex w-full items-center gap-x-4" key={index}>
            <Typography className="w-24 lg:w-32">{item.day}</Typography>
            <Separator
              orientation="vertical"
              className="h-6 w-[1.5px] bg-neutrals-800"
            />
            <Typography>{item.time}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
