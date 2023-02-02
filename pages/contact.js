import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-w-full min-h-screen px-6 xl:px-24 bg-circles bg-no-repeat bg-top bg-cover object-contain">
      <div className="xl:py-[300px] lg:py-[300px] md:py-[300px] py-[150px]">
        <h1 className="font-roboto uppercase text-5xl text-center my-6">
          Hey, thank you for viewing my portfolio.
        </h1>
        <h2 className="text-center font-roboto text-2xl uppercase">
          I&apos;m reachable via suyeechow0212@gmail.com
        </h2>
      </div>
      <Footer />
    </div>
  );
}
