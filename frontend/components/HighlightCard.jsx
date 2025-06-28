const HighlightCard = ({ highlight }) => {
  const box_style = highlight.bg ? "" : "border border-neutral-300";
  return highlight.title_first ? (
    <div
      className={`border border-neutral-300 flex flex-col justify-between h-[12rem] p-6 rounded-[1rem]`}
      style={{ backgroundColor: `${highlight.bg}` }}
    >
      <h4
        className={`text-[1rem] lg:text-[1.3rem] font-semibold uppercase ${highlight.first_align}`}
      >
        {highlight.title}
      </h4>
      <p
        className={`text-[1.1rem] lg:text-[1.3rem] text-neutral-600 max-w-[85%] font-light leading-[1.4rem] lg:leading-[1.5rem] ${highlight.second_align}`}
      >
        {highlight.description}
      </p>
    </div>
  ) : (
    <div
      className={`border border-neutral-300 flex flex-col justify-between h-[12rem] p-6 rounded-[1rem]`}
      style={{ backgroundColor: `${highlight.bg}` }}
    >
      <p
        className={`text-[1.1rem] lg:text-[1.3rem] text-neutral-600 max-w-[85%] font-light leading-[1.4rem] lg:leading-[1.5rem] ${highlight.first_align}`}
      >
        {highlight.description}
      </p>
      <h4
        className={`text-[1rem] lg:text-[1.3rem] font-semibold uppercase ${highlight.second_align}`}
      >
        {highlight.title}
      </h4>
    </div>
  );
};

export default HighlightCard;
