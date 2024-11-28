import { Fragment, useState } from "react";

import { CgSmileMouthOpen } from "react-icons/cg";
import { FaTeamspeak } from "react-icons/fa";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
} from "@headlessui/react";
// import { SendHorizontal } from "lucide-react";
// import { AlignJustify } from "lucide-react";
// import { Tally2 } from "lucide-react";
import { RiMenu5Fill } from "react-icons/ri";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
{
  name: "Analytics",
  description: "Get a better understanding of your traffic",
  href: "#",
  icon: ChartPieIcon,
},
{
  name: "Engagement",
  description: "Speak directly to your customers",
  href: "#",
  icon: CursorArrowRaysIcon,
},
{
  name: "Security",
  description: "Your customers’ data will be safe and secure",
  href: "#",
  icon: FingerPrintIcon,
},
{
  name: "Integrations",
  description: "Connect with third-party tools",
  href: "#",
  icon: SquaresPlusIcon,
},
{
  name: "Automations",
  description: "Build strategic funnels that will convert",
  href: "#",
  icon: ArrowPathIcon,
},
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleOpenMobileNav() {
    setMobileMenuOpen(true);
  }

  return (
    <header className="bg-white">
    <nav
    aria-label="Global"
    className="mx-auto flex containemr fixed z-10 w-full lg:px-20 max-ws-7xl items-center justify-between p-6 px-10"
    >
    <div className="flex lg:flex-1 "> </div>

    <div className=" md:flex group w-auto   gap-x-5 lg:flex-b1 lg:justify-end">
    <button className="text-sm hover:border hover:border-white hidden bg-white group-hover:text-white group-hover:bg-black md:text-lg md:flex border items-center  gap-x-2 p-4 px-10 rounded-full border-gray-800 font-semibold leading-6 text-gray-900">
    <span>Let's talk </span>
    <span>
              {/*import { CgSmileMouthOpen } from "react-icons/cg";*/}

    <FaTeamspeak
    strokeWidth={0.8}
    className="text-gray-900 text-4xl  group-hover:text-white"
    />
    </span>
    </button>


    <button
    onClick={handleOpenMobileNav}
    className=" bg-black shadow-md  top-10   shadow-slate-600 !cursor-pointer group-hover:bg-white flex justify-center items-center group-hover:border group-hover:border-slate-600 rounded-full size-20"
    >
    <RiMenu5Fill className="rotate-90 size-6 text-white group-hover:text-black font-bold bg-none " />
            {/* <Tally2 className="rotate-90 text-white" /> */}
    </button>
    </div>
    </nav>

    <Dialog
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
    className="lg:hssidden"
    >
    <div className="fixed inset-0 z-10" />
    <TransitionChild
    as={Fragment}
    enter="transition ease-in-out duration-300 transform"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transition ease-in-out duration-300 transform"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
    >
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-slate-600 bg-black   text-gray-100 px-6 py-6 sm:max-w-[30rem] sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
    <button
    onClick={() => setMobileMenuOpen(false)}
    className=" bg-gray-100 !cursor-pointer flex justify-center items-center rounded-full size-20"
    >
    <span className="sr-only">Close menu</span>
    <XMarkIcon
    aria-hidden="true"
    className="text-gray-900 cursor-pointer font-medium h-6 w-6"
    />
    </button>
    </div>
    <div className="mt-6 flow-root">
    <div className="-my-6 divide-y divide-gray-500/10">
    <div className="space-y-2 py-6 *:!cursor-pointer">
    <a
    onClick={() => setMobileMenuOpen(false)}
    href="#folio"
    className="-mx-3 block rounded-lg px-3 py-2 md:py-3 !cursor-pointer text-base font-semibold leading-7  "
    >
    Experience
    </a>
    <a
    onClick={() => setMobileMenuOpen(false)}
    href="#contact"
    className="-mx-3 block rounded-lg px-3 py-2 md:py-3 text-base font-semibold leading-7  "
    >
    Contact
    </a>
    <a
    href="#"
    className="-mx-3 block rounded-lg px-3 py-2 md:py-3 text-base font-semibold leading-7  "
    >
    Book a call
    </a>
    </div>
    </div>
    </div>
    </DialogPanel>
    </TransitionChild>
    </Dialog>
    </header>
    );
}
