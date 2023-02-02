import Toggle from "./ThemeToggle";
import { useRouter } from "next/router";
import Link from "next/link";

const navItems = ["resume", "projects", "contact"];

export default function Navbar() {
  const path = useRouter().pathname;

  return (
    <nav className="flex justify-between items-center h-20 font-bold px-6 xl:px-24 sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 transition-all shadow-sm">
      <Link href="/">
        <div className="flex gap-x-4 items-center cursor-pointer">
          <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
          <div className="font-roboto text-lg uppercase">Tricia</div>
        </div>
      </Link>

      <div className="flex gap-x-6">
        {navItems.map((item, index) => {
          return (
            <div
              key={index}
              className={
                `${path}` === `/${item}`
                  ? `border-b border-slate-900 dark:border-slate-50 font-roboto uppercase text-lg`
                  : `text-lg font-roboto uppercase`
              }
            >
              <Link href={`/${item}`}>{item}</Link>
            </div>
          );
        })}
        <Toggle />
      </div>
    </nav>
  );
}
