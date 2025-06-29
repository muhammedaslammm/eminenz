"use client";

import {
  User,
  Gear,
  ShieldCheck,
  Scales,
  Handshake,
  FirstAidKit,
} from "phosphor-react";

const icons = {
  User,
  Gear,
  ShieldCheck,
  Scales,
  Handshake,
  FirstAidKit,
};

const Values = ({ values }) => {
  return (
    <div className="space-y-2 lg:space-y-4">
      <h3 className="text-[1rem] lg:text-[1.3rem] font-semibold uppercase">
        {values.title}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {values.values.map((v) => {
          let Icon = icons[v.icon];
          let box_style = v.bg ? "" : "border border-neutral-300";
          return (
            <div
              key={v.id}
              style={{ backgroundColor: `${v.bg}`, color: `${v.text_color}` }}
              className={`border border-neutral-300 p-6 rounded-[.8rem] space-y-3`}
            >
              <Icon className="w-6 lg:w-8 h-6 lg:h-8" weight="regular" />
              <div className="space-y-0">
                <h4 className="text-[1.1rem] lg:text-[1.2rem] font-medium lg:font-semibold">
                  {v.title}
                </h4>
                <p className="text-[1.1rem] lg:text-[1.3rem]  leading-[1.45rem] lg:leading-[1.8rem]">
                  {v.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
