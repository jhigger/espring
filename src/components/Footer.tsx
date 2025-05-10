import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex bg-neutral-800 text-white lg:justify-center">
      <div className="container mx-auto flex flex-col items-center p-8">
        <h2 className="mt-16 text-center text-2xl font-bold lg:text-4xl">
          Start Your eSpring Program Today
        </h2>
        <p className="mt-1 text-sm text-stone-300 lg:text-lg">
          Live better, healthier lives
        </p>
        <div className="mt-6 flex justify-evenly space-x-4 font-medium">
          <Button size="lg" className="bg-primary/50" asChild>
            <a href="mailto:uyenle484@gmail.com">Talk to sales</a>
          </Button>
          <Button
            size="lg"
            className="bg-white text-zinc-800 hover:bg-white/90"
            asChild
          >
            <a
              href="https://calendly.com/uyenle848"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a demo
            </a>
          </Button>
        </div>
        <div className="mt-20 flex w-full items-end justify-between px-6 lg:px-20">
          <img
            src="/espring-logo.svg"
            alt="Logo"
            className="aspect-square w-[6.5rem] lg:w-40"
          />
          <div className="flex space-x-[1.38rem] lg:space-x-[2.38rem]">
            <a
              href="https://www.instagram.com/amwayus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 flex space-x-8 text-center text-sm font-medium lg:-mt-[1.35rem] lg:text-base">
          <a
            href="mailto:uyenle484@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail /> Email Us
          </a>
          <a href="tel:+1714-925-7109" className="flex items-center gap-2">
            <Phone />
            Call Us
          </a>
        </div>
        <p className="mt-10 mb-6 text-xs">
          eSpring. All rights reserved. &copy; 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
