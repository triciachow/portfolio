import About from "../components/resume/About";
import Education from "../components/resume/Education";
import Involvements from "../components/resume/Involvements";
import Skills from "../components/resume/Skills";
import Title from "../components/resume/Title";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col xl:w-8/12 mx-auto">
        <Title />
        <About />
        <Education />
        <Skills />
        <Involvements />
      </div>
    </>
  );
}
