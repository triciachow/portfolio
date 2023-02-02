import About from "../components/resume/About";
import Education from "../components/resume/Education";
import Extra from "../components/resume/Extra";
import Skills from "../components/resume/Skills";
import Certificate from "../components/resume/Certificate";
import Project from "../components/resume/Project";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col xl:w-8/12 mx-auto">
        <About />
        <Education />
        <Project />
        <Skills />
        <Certificate />
        <Extra />
      </div>
    </>
  );
}
