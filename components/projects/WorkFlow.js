import Image from "next/image";

export default function WorkFlow() {
  return (
    <>
      <section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
        <h2 className="w-full lg:w-10/12 uppercase font-roboto font-bold text-3xl justify-start mb-10">
          My Work Flow:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:w-10/12">
          {workFlow.map(work => (
            <div
              key={work.id}
              className="bg-gray-800 rounded-2xl p-5 flex flex-col w-full gap-y-5 hover:bg-gray-700"
            >
              <h4 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC] mb-3">
                #{work.id}
              </h4>
              <div>
                <Image
                  src={work.icon}
                  alt="Workflow icon"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="font-semibold text-xl">{work.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const workFlow = [
  {
    id: 1,
    title: "Research and Analysis",
    icon: "/file.svg",
  },
  {
    id: 2,
    title: "Wireframe and Prototype",
    icon: "/pen.svg",
  },
  {
    id: 3,
    title: "UI Design",
    icon: "/figma.svg",
  },
  {
    id: 4,
    title: "Web Development",
    icon: "/code.svg",
  },
  {
    id: 5,
    title: "Testing and Refinement",
    icon: "/test.svg",
  },
  {
    id: 6,
    title: "Deployment",
    icon: "/plane.svg",
  },
];
