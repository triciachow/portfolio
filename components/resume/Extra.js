import { extra } from "../../lib/extra";

export default function Involvements() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 gap-4">
        <div className="font-bold h-full lg:w-2/12 w-full self-start text-blue-700 uppercase font-roboto tracking-wider">
          Extra-Curricular
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between flex-wrap">
          {extra.map(item => (
            <div key={item.id} className="mb-4">
              <p className="font-bold mb-2">{item.activity}</p>
              <div className="italic">{item.role}</div>
              <div>{item.duration}</div>
              {item.details}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <a
          href="/Resume_Jan2023.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 border-blue-700 rounded-md px-4 py-2 text-blue-700 font-bold hover:bg-blue-700 hover:text-slate-50 transition ease-in-out">
            Download Resume PDF
          </div>
        </a>
      </div>
    </>
  );
}
