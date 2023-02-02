import { cert } from "../../lib/cert";

export default function Involvements() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-center items-center py-6 gap-4 border-b border-b-slate-300">
        <div className="font-bold h-full lg:w-2/12 w-full self-start text-blue-700 uppercase font-roboto tracking-wider">
          Certificate / Awards
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between flex-wrap">
          {cert.map(item => (
            <div key={item.id} className="mb-4">
              <p className="font-bold mb-2">{item.title}</p>
              <div>&#8226; Awarded by {item.by}</div>
              <div>&#8226; {item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
