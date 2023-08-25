import React from "react";
import { Link } from "react-router-dom";

export default function JobsGrid() {
  return (
    <footer className="relative">
      <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
        {/* Top area: Blocks */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          {/* 2nd, 3rd, 4th and 5th blocks */}
          <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 2nd block */}
            <div className="text-sm">
              <h6 className="font-medium uppercase mb-2">Products</h6>
              <ul>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Drag And Drop
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Visual Studio X
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Easy Content
                  </a>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="text-sm">
              <h6 className="font-medium uppercase mb-2">Resources</h6>
              <ul>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Industries and tools
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Use cases
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Online events
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Nostrud exercitation
                  </a>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="text-sm">
              <h6 className="font-medium uppercase mb-2">Company</h6>
              <ul>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Diversity & inclusion
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Press
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Customer stories
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Online communities
                  </a>
                </li>
              </ul>
            </div>

            {/* 5th block */}
            <div className="text-sm">
              <h6 className="font-medium uppercase mb-2">Support</h6>
              <ul>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Tutorials & guides
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Webinars
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Open-source
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
