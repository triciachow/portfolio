import About from "../components/resume/About";
import Education from "../components/resume/Education";
import Extra from "../components/resume/Extra";
import Skills from "../components/resume/Skills";
import Certificate from "../components/resume/Certificate";
import Project from "../components/resume/Project";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="min-w-full px-6 xl:px-24 pb-8">
      <div className="flex flex-col xl:w-9/12 mx-auto">
        <About />
        <Education />
        <Project />
        <Skills />
        <Certificate />
        <Extra />
      </div>
      <Footer />
    </div>
  );
}
