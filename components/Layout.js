import Head from "next/head";
import Link from "next/link";
import Toggle from "./ThemeToggle";

const navItems = ["resume", "projects", "contact"];

export default function Layout({ children }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 dark:text-slate-200 transition-all min-h-screen">
      <Head>
        <title>Tricia C.</title>
      </Head>
      <nav className="w-full flex justify-between items-center h-20 font-bold px-6 xl:px-24 sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 shadow-sm">
        <Link href="/">
          <div className="flex gap-x-4 items-center">
            <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
            <div className="font-roboto text-lg uppercase">Tricia</div>
          </div>
        </Link>

        <div className="flex gap-x-10">
          {navItems.map((item, index) => {
            return (
              <div key={index} className="uppercase font-roboto text-lg">
                <Link href={`/${item}`}>{item}</Link>
              </div>
            );
          })}
          <Toggle />
        </div>
      </nav>

      <div className="mx-6 xl:mx-24 h-full relative">{children}</div>
    </div>
  );
}
