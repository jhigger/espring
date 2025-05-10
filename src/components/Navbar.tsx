import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const items: { text: string; href: string }[] = [];

const Navbar = () => {
  return (
    <header className="flex items-center justify-center">
      <nav className="container flex items-center justify-between py-8">
        <Link href="/" className="mr-16">
          <img src="/espring-logo.svg" alt="logo" className="h-10 invert" />
        </Link>
        <div className="hidden w-full justify-between md:flex">
          <div className="flex items-center space-x-11">
            {items.map(({ text, href }) => (
              <a key={text} className="link" href={href}>
                {text}
              </a>
            ))}
          </div>
          <div className="space-x-4">
            <Button asChild>
              <a href="mailto:uyenle484@gmail.com">Contact Sales</a>
            </Button>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild className="flex md:hidden">
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="flex flex-col items-center justify-center gap-4 pt-12"
          >
            {items.map(({ text, href }) => (
              <SheetTitle key={text} className="underline underline-offset-4">
                <a href={href}>{text}</a>
              </SheetTitle>
            ))}
            <div className="mt-8 flex w-full flex-col gap-4 p-4">
              <Button asChild>
                <a href="mailto:uyenle484@gmail.com">Contact Sales</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
