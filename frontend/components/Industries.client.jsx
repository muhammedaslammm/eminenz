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
      <p className="text-[1.4rem]">{data.title}</p>
      <div className="grid grid-cols-8 gap-10">
        {data.icons.map(({ title, icon }) => {
          let Icon = iconMap[icon];
          return (
            <div className="flex flex-col items-center gap-2 bg-[rgba(180,211,227,0.63)] py-8 rounded-[.5rem]">
              <Icon size={38} weight="thin" />
              <span className="uppercase text-center text-[.8rem] font-medium">
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
