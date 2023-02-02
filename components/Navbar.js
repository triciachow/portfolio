import Toggle from "./ThemeToggle";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const navItems = ["resume", "projects", "contact"];

export default function Navbar() {
  const path = useRouter().pathname;

  return (
    // <nav className="flex justify-between items-center h-20 font-bold px-6 xl:px-24 sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 transition-all shadow-sm">
    //   <Link href="/">
    //     <div className="flex gap-x-4 items-center cursor-pointer">
    //       <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
    //       <div className="font-roboto text-lg uppercase">Tricia</div>
    //     </div>
    //   </Link>

    //   <div className="flex gap-x-6">
    //     {navItems.map((item, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className={
    //             `${path}` === `/${item}`
    //               ? `border-b border-slate-900 dark:border-slate-50 font-roboto uppercase text-lg`
    //               : `text-lg font-roboto uppercase`
    //           }
    //         >
    //           <Link href={`/${item}`}>{item}</Link>
    //         </div>
    //       );
    //     })}
    //     <Toggle />
    //   </div>
    // </nav>
    // Desktop nav
    <Popover>
      <div className="min-w-full fixed z-50">
        <nav
          className="flex justify-between items-center px-6 xl:px-24 h-20 font-bold sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 transition-all shadow-sm"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <span className="sr-only">Tricia</span>
              <Link href="/">
                <div className="flex gap-x-4 items-center cursor-pointer">
                  <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
                  <div className="font-roboto text-lg uppercase">Tricia</div>
                </div>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-mdp-2">
                  <span className="sr-only">Open main menu</span>
                  <Menu
                    className="h-6 w-6 dark:text-slate-50 text-slate-900"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:flex md:space-x-6">
            {/* <div className="flex gap-x-6"> */}
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
            {/* </div> */}
          </div>
        </nav>
      </div>

      {/* Mobile nav */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg dark:bg-slate-900 bg-slate-50">
            <div className="flex items-center justify-between px-3 pt-2">
              <Link href="/">
                <div className="flex gap-x-4 items-center cursor-pointer">
                  <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
                  <div className="font-roboto text-lg uppercase">Tricia</div>
                </div>
              </Link>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 dark:text-slate-50">
                  <span className="sr-only">Close main menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-4 px-4 pt-2 pb-3">
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
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
