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
import { SendHorizontal } from "lucide-react";
import { AlignJustify } from "lucide-react";
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
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleOpenMobileNav() {
    console.log("this is called");
    setMobileMenuOpen(true);
  }

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex containemr lg:px-20 max-ws-7xl items-center justify-between p-6 px-10"
      >
        <div className="flex lg:flex-1 ">
          <h3 className="text-4xl font-bold">ID</h3>
        </div>

        <div className=" md:flex group w-auto   gap-x-5 lg:flex-b1 lg:justify-end">
          <button className="text-sm hidden group-hover:text-white group-hover:bg-black md:text-lg md:flex border items-center  gap-x-2 p-4 px-10 rounded-full border-gray-800 font-semibold leading-6 text-gray-900">
            <span>Let's talk </span>
            <span>
              {/*import { CgSmileMouthOpen } from "react-icons/cg";*/}

              <FaTeamspeak
                strokeWidth={0.8}
                className="text-gray-900 text-4xl group-hover:text-white"
              />
            </span>
          </button>

          <button
            onClick={handleOpenMobileNav}
            className=" bg-black group-hover:bg-white flex justify-center items-center group-hover:border group-hover:border-slate-600 rounded-full size-20"
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
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className=" bg-gray-100 flex justify-center items-center rounded-full size-20"
              >
                {/* <button
                type="button"
              
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
              > */}
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="text-gray-900 font-medium h-6 w-6"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
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