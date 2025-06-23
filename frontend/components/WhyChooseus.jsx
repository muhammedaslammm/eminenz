import highlights from "@/data/highlights";
import HighlightCard from "./HighlightCard";

const WhyChooseus = () => {
  const top_highlights = highlights.items.filter(
    (h) => h.card_position === "top"
  );
  const bottom_highlights = highlights.items.filter(
    (h) => h.card_position === "bottom"
  );
  return (
    <section className="w-[95%] mx-auto py-10 space-y-4">
      <h3 className="text-[1.4rem] font-semibold uppercase">
        {highlights.title}
      </h3>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {top_highlights.map((h) => (
            <HighlightCard key={h.id} highlight={h} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {bottom_highlights.map((h) => (
            <HighlightCard key={h.id} highlight={h} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
