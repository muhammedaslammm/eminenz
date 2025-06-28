import table_data from "@/data/table";

const Table = () => {
  return (
    <section className="w-[90%] lg:w-[87%] mx-auto py-10 space-y-4">
      <h2 className="text-[1.1rem] lg:text-[1.4rem] font-semibold uppercase text-black">
        {table_data.title}
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:flex gap-4">
          {table_data.data.map((d) => (
            <div
              key={d.id}
              className={`${d.width} p-4 lg:p-6 rounded-[.5rem] space-y-2 border border-neutral-300`}
              style={{ backgroundColor: `${d.bg}` }}
            >
              <h3 className="text-[1rem] lg:text-[1.2rem] font-medium text-black">
                {d.title}
              </h3>
              <ul className="text-[1rem] lg:text-[1.2rem] text-neutral-600 leading-[1.6rem] lg:leading-[1.8rem] list-disc list-inside">
                {d.items.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;
