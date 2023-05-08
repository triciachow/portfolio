import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <>
      <Navbar />
      <section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center min-h-[640px]">
        <a
          href="/Resume_Jan2023.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-10/12 flex justify-center"
        >
          <div className="w-full lg:w-6/12 rounded-2xl bg-[#0E7490] hover:bg-[#164E63] p-10 flex justify-center items-center gap-5 font-semibold text-xl leading-[60px] transition-all ease-in-out">
            Download Tricia's resume here <FileDown />
          </div>
        </a>
      </section>
      <Footer />
    </>
  );
}
