import Head from "next/head";
import FAQs from "~/components/FAQs";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>eSpring</title>
        <meta
          name="description"
          content="The World's Leading Home Water Treatment System"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Navbar />
        <main className="container mx-auto flex w-full flex-col items-center justify-center p-4 px-6">
          <Hero />
          <div className="animate-fade-up animate-duration-500 animate-delay-[2000ms] w-full">
            <Section1 />
          </div>
          <Section2 />
          <FAQs />
        </main>
        <Footer />
      </div>
    </>
  );
}
