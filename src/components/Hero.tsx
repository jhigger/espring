import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <h1 className="animate-fade-up animate-duration-1000 animate-ease-out text-primary mt-8 w-72 text-center text-4xl font-semibold sm:w-[30rem] lg:w-[50rem] lg:text-6xl">
        The World&apos;s Leading Home{" "}
        <span className="text-sky-400">Water</span> Treatment System
      </h1>

      <div className="flex flex-col items-center">
        <div className="animate-fade-up animate-delay-[1100ms] animate-duration-1000">
          <p className="mt-6 w-72 text-center text-[0.875rem] font-medium text-zinc-800 sm:w-[30rem] md:w-[30rem] md:text-sm lg:w-[35rem] lg:text-base">
            Transform your property with the #1 selling water purification
            system trusted by millions
          </p>
        </div>
        <div className="animate-fade-up animate-delay-[1300ms] animate-duration-1000">
          <div className="mt-6 space-x-4 font-medium">
            <Button size="lg" asChild>
              <a
                href="https://calendly.com/uyenle848"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a demo
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.amway.com/en_US/Shop/Home/Water-Treatment/c/119"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Pricing
              </a>
            </Button>
          </div>
        </div>
        <div className="animate-fade-up animate-delay-[1500ms] animate-duration-1000 relative w-[90vw]">
          <div className="relative container mx-auto mt-8 aspect-video w-full overflow-hidden rounded-xl drop-shadow-sm">
            {isLoading && (
              <div className="bg-opacity-50 absolute inset-0 flex w-full items-center justify-center bg-gray-100">
                <Loader2 className="animate-spin" />
              </div>
            )}
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/kUV6sq8_ewo?autoplay=1&mute=1&loop=1&playlist=kUV6sq8_ewo&rel=0"
              title="Demo Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              onLoad={handleVideoLoad}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
