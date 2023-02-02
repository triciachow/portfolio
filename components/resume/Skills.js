export default function Skills() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-center items-center py-6 gap-4 border-b border-b-slate-300">
        <div className="font-bold h-full lg:w-2/12 w-full self-start text-blue-700 uppercase font-roboto tracking-wider">
          Technical Skills
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between">
          <p className="font-bold mb-2">Languages & Frameworks</p>
          <p>JavaScript, CSS, HTML, ReactJS, NextJS, Tailwind CSS</p>
          <p className="font-bold my-2">Tools</p>
          <p>Git, Figma, Notion, Jira, Contenful</p>
        </div>
      </div>
    </>
  );
}
