const FAQs = () => {
  return (
    <section id="faq" className="bg-white py-8 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-500">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our water filtration
              system.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl divide-y">
          <div className="py-4">
            <h3 className="text-lg font-medium">
              How often should I replace the filter?
            </h3>
            <p className="mt-2 text-gray-500">
              We recommend replacing the filter cartridge once a year or after
              filtering 5,000 liters of water, whichever comes first.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-medium">Is installation difficult?</h3>
            <p className="mt-2 text-gray-500">
              Not at all. The eSpring system is designed for easy installation,
              and most customers can set it up in under 30 minutes.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-medium">
              How do I know when to replace the filter?
            </h3>
            <p className="mt-2 text-gray-500">
              The eSpring system includes an electronic monitoring system that
              tracks both time and usage, alerting you when it&apos;s time for a
              replacement.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-medium">
              Does the system remove beneficial minerals?
            </h3>
            <p className="mt-2 text-gray-500">
              No, the eSpring system is designed to remove contaminants while
              preserving beneficial minerals that contribute to water&apos;s
              natural taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
