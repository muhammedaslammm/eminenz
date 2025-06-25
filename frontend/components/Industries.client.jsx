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
      <p className="text-[1.2rem] font-medium leading-[1.6rem] lg:text-[1.3rem]">
        {data.title}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 lg:gap-10">
        {data.icons.map(({ icon, ...rest }) => {
          let Icon = iconMap[icon];
          return (
            <div
              key={rest.id}
              className="flex flex-col flex-wrap items-center gap-2 border border-[rgba(58,83,96,0.63)] lg:border-0 lg:bg-[rgba(180,211,227,0.65)] py-6 lg:py-8 rounded-[.2rem] lg:rounded-[.5rem]"
            >
              <Icon className="w-7 h-7" weight="light" />
              <span className="uppercase text-center text-[.8rem] lg:text-[.8rem] font-medium">
                {rest.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
