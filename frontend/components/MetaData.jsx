import metadata from "@/data/metadata";

const MetaData = () => {
  const { general, address } = metadata;
  return (
    <div className="w-2/6  flex flex-col justify-between">
      <div className="self-start w-[40%]">
        <div className="text-neutral-500">{general.label}</div>
        {general.values.map((value, i) => (
          <div key={i} className="font-medium">
            {value}
          </div>
        ))}
      </div>
      <div className="text-end self-end w-[60%]">
        <div className="text-neutral-500">{address.label}</div>
        {address.values.map((value, i) => (
          <div key={i} className="font-medium">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetaData;
