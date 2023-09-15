import { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalContext } from "../context/ModalContext.jsx";
import { AiOutlineGoogle } from "react-icons/ai";
import logo from "../images/indiees-logo.png";

export default function Example() {
  const { open, setOpen } = useContext(ModalContext);

  const googleAuth = () => {
    window.open(import.meta.env.VITE_AUTH_URL, "_self");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5  shadow-2xl transition-all sm:my-8 w-full h-[40vh] sm:max-w-lg sm:p-6 flex flex-col justify-center gap-4 ">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* LOGO  */}
                <div className="flex  justify-center">
                  <img className="w-40" src={logo} alt="" />
                </div>
                <div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium font-cabinet-grotesk text-gray-900"
                  >
                    Sign up to Indiees in seconds
                  </Dialog.Title>
                </div>

                <button
                  className="flex items-center justify-center px-4 py-3 text-white text-base font-semibold bg-red-500 hover:bg-red-500 rounded-md w-full"
                  onClick={googleAuth}
                >
                  <span className="mr-2">
                    <AiOutlineGoogle size={18} />
                  </span>
                  Continue with Google
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
