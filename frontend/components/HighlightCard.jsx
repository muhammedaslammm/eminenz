const HighlightCard = ({ highlight }) => {
  return highlight.title_first ? (
    <div
      className="flex flex-col justify-between h-[15rem] p-6 rounded-[1rem]"
      style={{ backgroundColor: `${highlight.bg}` }}
    >
      <h4
        className={`text-[1.4rem] font-semibold uppercase ${highlight.first_align}`}
      >
        {highlight.title}
      </h4>
      <p
        className={`text-[1.4rem] text-neutral-500 max-w-[85%] font-light leading-[1.5rem] ${highlight.second_align}`}
      >
        {highlight.description}
      </p>
    </div>
  ) : (
    <div
      className="flex flex-col justify-between h-[15rem] p-6 rounded-[1rem]"
      style={{ backgroundColor: `${highlight.bg}` }}
    >
      <p
        className={`text-[1.4rem] text-neutral-500 max-w-[85%] font-light leading-[1.5rem] ${highlight.first_align}`}
      >
        {highlight.description}
      </p>
      <h4
        className={`text-[1.4rem] font-semibold uppercase ${highlight.second_align}`}
      >
        {highlight.title}
      </h4>
    </div>
  );
};

export default HighlightCard;
