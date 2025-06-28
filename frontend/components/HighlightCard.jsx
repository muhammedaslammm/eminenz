const HighlightCard = ({ highlight }) => {
  const box_style = highlight.bg ? "" : "border border-neutral-300";
  return highlight.title_first ? (
    <div
      className={`${highlight.width} border border-neutral-300 flex flex-col justify-between h-[12rem] p-6`}
      style={{
        backgroundColor: `${highlight.bg}`,
        color: `${highlight.text_color}`,
      }}
    >
      <h4
        className={`text-[1rem] lg:text-[1.3rem] font-semibold uppercase ${highlight.first_align}`}
      >
        {highlight.title}
      </h4>
      <p
        className={`text-[1.1rem] lg:text-[1.3rem]  max-w-[85%] font-light leading-[1.4rem] lg:leading-[1.5rem] ${highlight.second_align}`}
      >
        {/* text-neutral-600 */}
        {highlight.description}
      </p>
    </div>
  ) : (
    <div
      className={`border border-neutral-300 flex flex-col justify-between h-[12rem] p-6`}
      style={{
        backgroundColor: `${highlight.bg}`,
        color: `${highlight.text_color}`,
      }}
    >
      <p
        className={`text-[1.1rem] lg:text-[1.3rem] max-w-[85%] font-light leading-[1.4rem] lg:leading-[1.5rem] ${highlight.first_align}`}
      >
        {highlight.description}
      </p>
      {/*  text-neutral-600 */}
      <h4
        className={`text-[1rem] lg:text-[1.3rem] font-semibold uppercase ${highlight.second_align}`}
      >
        {highlight.title}
      </h4>
    </div>
  );
};

export default HighlightCard;
