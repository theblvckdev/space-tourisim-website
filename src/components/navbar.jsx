import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Destination", path: "/destination", current: false },
  { name: "Crew", path: "/crew", current: false },
  { name: "Technology", path: "/technology", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="bg-transparent z-50 fixed top-0 p-3 md:p-0 left-0 right-0"
    >
      {({ open }) => (
        <>
          <div className="mx-auto w-full">
            <div className="relative flex lg:h-32 md:h-full items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 md:mr-0 mr-auto lg:ml-[50px] md:ml-[30px] ml-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Space tourisim" />
                </div>
                <div className="hidden backdrop-blur-lg relative bg-gray-500 bg-opacity-10 lg:pl-24 md:px-10 lg:px-0 w-[50%] sm:ml-auto sm:block lg:after:absolute lg:after:w-[83%] lg:after:h-[1px] lg:after:bg-gray-700 lg:after:-left-[77%] lg:after:top-[50%]">
                  <div className="flex lg:space-x-10 md:space-x-8">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={classNames(
                          item.path === location.pathname
                            ? "border-b-white text-white"
                            : "text-gray-300 hover:border-b-white",
                          "h-full text-[14px] flex gap-3 duration-700 border-b-2 border-b-transparent items-center font-barlow py-7 uppercase tracking-widest font-light"
                        )}
                      >
                        <div className="text-white font-medium lg:block md:hidden">
                          0{index}
                        </div>
                        <div>{item.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 z-20 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden duration-700 bg-gray-700 backdrop-blur-xl bg-opacity-50 z-10 fixed h-full top-0 right-0 w-[70%]">
            <div className="space-y-6 px-7 pb-3 pt-32">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={classNames(
                    item.path === location.pathname
                      ? "text-white"
                      : "text-gray-300",
                    "text-xl flex gap-4 tracking-[.1em] font-light"
                  )}
                >
                  <div className="text-white font-medium">0{index}</div>
                  <div>{item.name}</div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
