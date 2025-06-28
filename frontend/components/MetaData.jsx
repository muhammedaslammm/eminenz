import metadata from "@/data/metadata";

const MetaData = () => {
  const { general, address } = metadata;
  return (
    <div className="w-full lg:w-2/6 border border-neutral-300 lg:border-0 px-2 lg:px-0 py-4 flex flex-col justify-between gap-8">
      <div className="lg:self-end lg:text-end text-[.9rem] lg:text-[1rem]">
        <div className="text-neutral-500">{general.label}</div>
        {general.values.map((value, i) => (
          <div key={i} className="font-medium">
            {value}
          </div>
        ))}
      </div>
      <div className="lg:text-end lg:self-end text-[.9rem] lg:text-[1rem]">
        <div className="text-neutral-500">{address.label}</div>
        {address.values.map((value, i) => (
          <div
            key={i}
            className="font-medium leading-[1.2rem] lg:leading-[1.5rem]"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetaData;
