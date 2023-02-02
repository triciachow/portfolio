import Link from "next/link";

export default function Involvements() {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center py-6 gap-4 border-b border-b-slate-300">
      <div className="font-bold h-full lg:w-2/12 w-full self-start uppercase font-roboto tracking-wider">
        Projects
      </div>
      <div className="lg:w-8/12 w-full">
        Please checkout my projects under the{" "}
        <span className="uppercase font-roboto border-b border-slate-900">
          <Link href="/projects">Projects</Link>
        </span>{" "}
        tab on the menu bar.
      </div>
    </div>
  );
}
