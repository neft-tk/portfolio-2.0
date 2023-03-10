import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.svg";
import resume from "../assets/Erik Buss Resume.pdf"

export default function Nav() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-row items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
          <span className="text-m self-center md:text-xl font-semibold whitespace-nowrap dark:text-white">
            Erik Buss - Driven By Growth
          </span>
        </a>
        <button
            type="button"
            className="text-m focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-2 py-1.5 md:px-5 md:py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <a href={resume} download>
              Resume
            </a>
          </button>
        <div
          class="hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/">
                <h1
                  className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <a
                href="/education"
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="/work"
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden dropdown">
          <button className="dropbtn">
            <img src={menu} alt="menu button" className="menu-icon"/>
          </button>
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/education">Education</a>
            <a href="/work">Work Experience</a>
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
