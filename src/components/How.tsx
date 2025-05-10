import { CheckCircle } from "lucide-react";
import { FiltrationDiagram } from "./FiltrationDiagram";

const How = () => {
  return (
    <div>
      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-500">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Multi-Stage Filtration System
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed">
              See how our advanced filtration technology works to deliver clean,
              safe water.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                {
                  title: "Prefilter",
                  desc: "Captures large particles like sand, dirt, sediment, and rust before they can enter the main filtration system.",
                },
                {
                  title: "Protective Filter",
                  desc: "Keeps medium-sized particles like hair, algae, and fibers from reaching the carbon filter, extending its lifespan.",
                },
                {
                  title: "Carbon Filter",
                  desc: "Reduces contaminants that affect taste and odor (VOCs), pesticides, and chemicals like PFDA and PFOS. It filters particles down to 0.2 microns.",
                },
                {
                  title: "UV-C LED System",
                  desc: "Eliminates bacteria and viruses effectively without chemicals, while preserving the water's natural taste and quality.",
                },
              ].map((stage, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-sky-100 px-3 py-1 font-bold text-sky-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{stage.title}</h3>
                    <p className="text-gray-500">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <FiltrationDiagram />
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="rounded-xl bg-gray-50 py-6">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/yryjnbk2sjhv5p3/166cd35143c646cfbf468174f068640c/original/New-eSpring-Brochure-1.jpg"
              alt="UV-C LED Technology"
              className="aspect-square rounded-lg object-cover lg:aspect-[9/16]"
            />
            <div className="order-1 space-y-4 lg:order-2">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-500">
                Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                UV-C LED Technology
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Next, the water flows through the UV-C LED system. UV-C LEDs
                emit energy in the UV-C range (around 267 nanometers), which
                helps eliminate bacteria and viruses effectively without
                chemicals, while protecting the taste and quality of the water.
              </p>
              <ul className="space-y-2">
                {[
                  "A sustainable way to kill bacteria",
                  "No chemical use",
                  "Integrated into the filter, doesn't affect water flow or taste",
                  "Works immediately as water flows through",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                (Based on NSF International verification, 2022)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-white py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-500">
              Benefits
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose eSpring?
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed">
              Experience the difference with our advanced water filtration
              technology.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {[
              {
                title: "Removes 170+ Contaminants",
                desc: "Our system effectively reduces over 170 contaminants including dirt, sediment, chemicals, PFDA, PFOS, and pharmaceutical waste.",
              },
              {
                title: "Superior Filtration",
                desc: "Filters particles down to 0.2 microns — smaller than a human hair (300-500 microns).",
              },
              {
                title: "Chemical-Free Purification",
                desc: "UV-C LED technology eliminates bacteria and viruses without adding chemicals to your water.",
              },
              {
                title: "Better Taste & Quality",
                desc: "Enjoy water that not only is clean and safe but also tastes great with no chemical aftertaste.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
