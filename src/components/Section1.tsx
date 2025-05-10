const items: { title: string; subtitle: string; description: string }[] = [
  {
    title: "10M+",
    subtitle: "Units Sold",
    description: "Across 48 countries worldwide",
  },
  {
    title: "77%",
    subtitle: "Concerned",
    description: "U.S. households worried about tap water safety",
  },
  {
    title: "100%",
    subtitle: "Satisfaction",
    description: "Smart in-unit purification enhances tenant experience",
  },
];

const Section1 = () => {
  return (
    <div className="mt-12 flex w-full flex-col items-center sm:mt-20">
      <h2 className="mb-2 text-center text-3xl font-bold lg:text-5xl">
        Why eSpring Matters
      </h2>
      <p className="text-muted-foreground mb-16 text-center text-xl/relaxed">
        Discover how we deliver clean and safe water that residents value
      </p>
      <div className="flex flex-col flex-wrap justify-center gap-y-[3.75rem] text-center whitespace-normal md:flex-row md:gap-x-[3.75rem]">
        {items.map(({ title, subtitle, description }) => (
          <div key={title} className="flex flex-col items-center">
            <div className="text-center text-balance">
              <div className="mb-1 text-2xl font-extrabold lg:text-4xl">
                {title}
              </div>
              <div className="mb-2 text-lg font-bold lg:text-xl">
                {subtitle}
              </div>
              <p className="text-muted-foreground max-w-3xs">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
