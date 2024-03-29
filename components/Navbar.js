import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const path = useRouter().pathname;

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<div className="mx-auto">
				<nav className="min-w-full lg:px-[100px] md:px-10 px-5">
					<div className="flex justify-center">
						<ul
							className={`w-full lg:max-w-[1160px] lg:flex-row ${
								isOpen ? `flex-col` : ``
							} flex gap-4 p-5 justify-center items-center rounded-2xl bg-gray-800 my-5 drop-shadow-2xl`}
							onClick={toggle}
						>
							{/* LOGO */}
							<div className="w-full h-full">
								<Link href="/">
									<a>
										<div className="w-full bg-tech bg-cover bg-center rounded-lg h-full">
											<div className="bg-gray-900/30 backdrop-brightness-75 w-full flex justify-center items-center rounded-lg h-full">
												<Image
													src="/logo.svg"
													alt="Tricia logo"
													width={200}
													height={50}
												/>
											</div>
										</div>
									</a>
								</Link>
							</div>

							{/* HAMBURGER */}
							<button
								className="hover:cursor-pointer hover:bg-gray-700 lg:hidden p-5 rounded-lg"
								onClick={toggle}
							>
								<span>{isOpen ? <X /> : <Menu />}</span>
							</button>

							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`lg:flex lg:w-full ${
										isOpen ? `block w-full` : `hidden`
									}`}
								>
									<Link href={link.href}>
										<a
											className={`flex justify-left gap-x-8 font-medium leading-6 p-5 rounded-lg w-full hover:bg-gray-700 transition-all ease-in-out hover:cursor-pointer hover:rounded-lg ${
												path === link.href ? `bg-gray-700` : ``
											}`}
										>
											<Image
												src={link.icon}
												alt={link.alt}
												width={link.width}
												height={link.height}
											/>{" "}
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</>

		// Desktop nav
		// <Popover>
		//   <div className="min-w-full fixed z-50">
		//     <nav
		//       className="flex justify-between items-center px-6 xl:px-24 h-20 font-bold bg-slate-50 dark:bg-slate-900 transition-all shadow-sm"
		//       aria-label="Global"
		//     >
		//       <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
		//         <div className="flex w-full items-center justify-between md:w-auto">
		//           <span className="sr-only">Tricia</span>
		//           <Link href="/">
		//             <div className="flex gap-x-4 items-center cursor-pointer">
		//               <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
		//               <div className="font-roboto text-lg uppercase">Tricia</div>
		//             </div>
		//           </Link>
		//           <div className="-mr-2 flex items-center md:hidden">
		//             <Popover.Button className="inline-flex items-center justify-center rounded-md p-2">
		//               <span className="sr-only">Open main menu</span>
		//               <Menu
		//                 className="h-6 w-6 dark:text-slate-50 text-slate-900"
		//                 aria-hidden="true"
		//               />
		//             </Popover.Button>
		//           </div>
		//         </div>
		//       </div>
		//       <div className="hidden md:ml-10 md:flex md:space-x-6">
		//         {/* <div className="flex gap-x-6"> */}
		//         {navItems.map((item, index) => {
		//           return (
		//             <div
		//               key={index}
		//               className={
		//                 `${path}` === `/${item}`
		//                   ? `border-b border-slate-900 dark:border-slate-50 font-roboto uppercase text-lg`
		//                   : `text-lg font-roboto uppercase`
		//               }
		//             >
		//               <Link href={`/${item}`}>{item}</Link>
		//             </div>
		//           );
		//         })}
		//         <Toggle />
		//         {/* </div> */}
		//       </div>
		//     </nav>
		//   </div>

		//   {/* Mobile nav */}
		//   <Transition
		//     as={Fragment}
		//     enter="duration-150 ease-out"
		//     enterFrom="opacity-0 scale-95"
		//     enterTo="opacity-100 scale-100"
		//     leave="duration-100 ease-in"
		//     leaveFrom="opacity-100 scale-100"
		//     leaveTo="opacity-0 scale-95"
		//   >
		//     <Popover.Panel
		//       focus
		//       className="inset-x-4 top-4 fixed z-50 origin-top-right transform transition md:hidden"
		//     >
		//       <div className="overflow-hidden rounded-lg dark:bg-slate-900 bg-slate-50">
		//         <div className="flex items-center justify-between px-3 pt-2">
		//           <Link href="/">
		//             <div className="flex gap-x-4 items-center cursor-pointer">
		//               <div className="w-[30px] h-[30px] rounded-full bg-amber-300"></div>
		//               <div className="font-roboto text-lg uppercase">Tricia</div>
		//             </div>
		//           </Link>
		//           <div className="-mr-2">
		//             <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 dark:text-slate-50">
		//               <span className="sr-only">Close main menu</span>
		//               <X className="h-6 w-6" aria-hidden="true" />
		//             </Popover.Button>
		//           </div>
		//         </div>
		//         <div className="space-y-4 px-4 pt-2 pb-3">
		//           {navItems.map((item, index) => {
		//             return (
		//               <div
		//                 key={index}
		//                 className={
		//                   `${path}` === `/${item}`
		//                     ? `border-b border-slate-900 dark:border-slate-50 font-roboto uppercase text-lg`
		//                     : `text-lg font-roboto uppercase`
		//                 }
		//               >
		//                 <Link href={`/${item}`}>{item}</Link>
		//               </div>
		//             );
		//           })}
		//           <div className="flex justify-end">
		//             <Toggle />
		//           </div>
		//         </div>
		//       </div>
		//     </Popover.Panel>
		//   </Transition>
		// </Popover>
	);
}

const navLinks = [
	{
		id: 1,
		icon: "/project.svg",
		alt: "Project icon",
		width: 24,
		height: 24,
		href: "/projects",
		name: "Projects",
	},
	{
		id: 2,
		icon: "/resume.svg",
		alt: "Resume icon",
		width: 24,
		height: 24,
		href: "/resume",
		name: "Resume",
	},
	{
		id: 3,
		icon: "/contact.svg",
		alt: "contact icon",
		width: 24,
		height: 24,
		href: "/contact",
		name: "Contact",
	},
];
