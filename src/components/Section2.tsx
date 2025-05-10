import MyBarChart, { barChartData } from "./BarChart";
import How from "./How";
import MyLineChart from "./LineChart";

const awards: { label: string }[] = [
  {
    label: "14x Frost & Sullivan Leadership Award",
  },
  {
    label: "NSF/ANSI Standards 42, 53, 55, 401 certified",
  },
  {
    label: "WQA Gold Seal Certification",
  },
  {
    label: "Reader's Digest Most Trusted Brand (15+ years)",
  },
];

const impacts: { label: string }[] = [
  {
    label: "Successfully deployed across 48 countries",
  },
  {
    label: "Reduced microplastics and pharmaceuticals",
  },
  {
    label: "Eliminated chlorine taste and odor",
  },
  {
    label: "200+ unit pilot with high satisfaction",
  },
];

const benefits = [
  {
    label: "Stand out with premium wellness amenities",
    value: "Competitive Edge",
  },
  {
    label: "Increased monthly rent premiums per unit",
    value: "$20-$50",
  },
  {
    label: "Reduced maintenance",
    value: "30%",
  },
  {
    label: "Plastic bottles saved per unit annually",
    value: "10k+",
  },
];

const roi = [
  {
    label: "Initial Investment",
    description: "$1,200 per unit (bulk rate)",
    value: "$1,200",
  },
  {
    label: "Annual Maintenance",
    description: "Return on Investment",
    value: "$120",
  },
  {
    label: "Payback Period",
    description: "Less than 2 years with modest rent increases",
    value: "2 Years",
  },
  {
    label: "Long-Term Gains",
    description: "$60k net annual gain for 100-unit complex",
    value: "$60,000",
  },
];

const Section2 = () => {
  // const { isIntersecting, ref } = useIntersectionObserver();

  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="col-span-full mt-16 flex h-96 flex-col space-y-6 overflow-hidden overflow-y-hidden rounded-xl border bg-sky-50 px-5 pt-5 shadow-sm lg:h-[38rem] lg:space-y-8 lg:px-8 lg:pt-8">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-xl font-bold lg:text-3xl">
            eSpring Carbon e3 Filter
          </h2>
          <p className="text-muted-foreground text-sm font-medium lg:text-lg">
            This powerful filtration system reduces over 170 contaminants in
            drinking water. These include dirt, sediment, chemicals, PFDA and
            PFOS, pharmaceutical waste, and many harmful substances.
          </p>
        </div>
        <div className="relative size-full overflow-hidden rounded-t-xl">
          <img
            src="https://cdn.gamma.app/yryjnbk2sjhv5p3/641a89618d534666967de9eb9e900c81/original/ChatGPT-Image-Apr-17-2025-09_44_15-PMsfdsfdsf.png"
            alt="eSpring Carbon e3 Filter"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="col-span-1 flex w-full flex-col overflow-hidden rounded-xl border bg-sky-50 p-6 shadow-sm lg:p-8">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-xl font-bold sm:text-xl lg:text-3xl">
            Proven Results
          </h2>

          <h3 className="text-foreground text-base font-semibold lg:w-full lg:text-lg">
            Award-Winning Performance
          </h3>
          <div className="max-h-32 overflow-hidden">
            <div className="relative block w-full flex-col space-y-1 overflow-hidden">
              <div className="animate-vertical-scroll flex flex-col space-y-1">
                {awards.concat(awards).map(({ label }, i) => (
                  <div
                    key={i}
                    className="text-muted-foreground rounded-lg border bg-white p-4 text-xs font-medium sm:text-base"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-foreground text-base font-semibold lg:w-full lg:text-lg">
            Real-World Impact
          </h3>
          <div className="max-h-32 overflow-hidden">
            <div className="relative block w-full flex-col space-y-1 overflow-hidden">
              <div className="animate-vertical-scroll flex flex-col space-y-1">
                {impacts.concat(impacts).map(({ label }, i) => (
                  <div
                    key={i}
                    className="text-muted-foreground rounded-lg border bg-white p-4 text-xs font-medium sm:text-base"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex w-full flex-col justify-between overflow-hidden rounded-xl border bg-sky-50 p-5 pb-0 shadow-sm lg:mt-0 lg:p-8 lg:pb-0">
        <div className="space-y-4">
          <h2 className="text-xl font-bold lg:text-3xl">
            Property Management Benefits
          </h2>
        </div>
        <div className="flex h-60 justify-center gap-x-4 sm:h-[40vw] lg:h-[21rem]">
          <div className="relative flex w-full flex-col space-y-1 overflow-hidden">
            <div className="animate-vertical-scroll flex flex-col space-y-1">
              {benefits.concat(benefits).map(({ label, value }, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-white p-2 font-medium text-stone-900"
                >
                  <div className="flex w-full flex-col rounded-lg bg-sky-50 py-3 pl-2 sm:pl-5">
                    <span className="font-semibold sm:text-lg">{value}</span>
                    <span className="text-muted-foreground text-xs sm:text-base">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <How />
      </div>

      <div className="col-span-full flex flex-col space-y-6 overflow-hidden overflow-y-hidden rounded-xl border bg-sky-50 p-5 shadow-sm lg:space-y-8 lg:p-8">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-xl font-bold lg:text-3xl">
            Simple Implementation
          </h2>
          <p className="text-muted-foreground text-sm font-medium lg:text-lg">
            Quick 60-minute install with no special tools. Flexible setup
            options, full training, and optional ongoing maintenance included.
          </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/HZs-HyCW6pg?autoplay=1&mute=1&loop=1&playlist=HZs-HyCW6pg&rel=0"
            title="Demo Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="col-span-1 flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-sky-50 p-5 shadow-sm lg:mt-0 lg:p-8">
        <div className="mb-4 space-y-4">
          <h2 className="text-xl font-bold lg:text-3xl">Market Opportunity</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          {barChartData.map(({ title, description, percent }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-sm"
            >
              <span className="text-2xl font-semibold">{percent}%</span>
              <div>
                <h3 className="text-base font-medium">{title}</h3>
                <p className="text-muted-foreground text-xs">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <MyBarChart />
      </div>

      <div className="col-span-1 flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-sky-50 p-5 shadow-sm lg:mt-0 lg:p-8">
        <div className="mb-4 space-y-4">
          <h2 className="text-xl font-bold sm:text-xl lg:text-3xl">
            Financial ROI
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          {roi.map(({ label, description, value }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-sm"
            >
              <span className="text-2xl font-semibold">{value}</span>
              <div>
                <h3 className="text-base font-medium">{label}</h3>
                <p className="text-muted-foreground text-xs text-balance">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MyLineChart />
      </div>
    </div>
  );
};

export default Section2;
