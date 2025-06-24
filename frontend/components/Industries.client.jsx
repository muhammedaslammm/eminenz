"use client";

import {
  Factory,
  Lightning,
  Leaf,
  Pill,
  Flask,
  FrameCorners,
  Cube,
  Recycle,
} from "phosphor-react";

const iconMap = {
  Factory,
  Lightning,
  Leaf,
  Pill,
  Flask,
  FrameCorners,
  Cube,
  Recycle,
};

const Industries = ({ data }) => {
  return (
    <div className="space-y-2">
      <p className="text-[1.2rem] uppercase font-medium leading-[1.6rem] lg:text-[1.4rem]">
        {data.title}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 lg:gap-10">
        {data.icons.map(({ title, icon }) => {
          let Icon = iconMap[icon];
          return (
            <div className="flex flex-col flex-wrap items-center gap-2 border border-[rgba(58,83,96,0.63)] lg:bg-[rgba(72,103,119,0.63)] py-4 lg:py-8 rounded-[.2rem] lg:rounded-[.5rem]">
              <Icon className="w-9 h-9" weight="light" />
              <span className="uppercase text-center text-[.8rem] lg:text-[.8rem] font-medium">
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
