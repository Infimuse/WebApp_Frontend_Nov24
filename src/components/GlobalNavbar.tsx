"use client";
import { useState, Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { TbCalendarSearch } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow fixed w-full z-40">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 z-[100] items-center">
                <img
                  className="block h-8  w-auto lg:hidden"
                  src="/assets/logo.png"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/assets/logo.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8"></div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <div className="relative group p-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(219,112,147,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-100"></div>
                  <Link
                    href="/communities"
                    className="relative text-xs flex items-center gap-1 bg-white text-black px-2 sm:px-4 py-2 rounded-full sm:font-semibold"
                  >
                    Communities
                  </Link>
                </div>
              </button>

              {/* User menu */}
              <div className="hidden sm:block relative ml-3">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white shadow-lg sm:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <a
            href="#"
            className=" text-base font-medium text-gray-700 hover:text-indigo-500 flex items-center"
          >
            <TbCalendarSearch size={18} className="mr-2" />{" "}
            {/* Icon for Upcoming Bookings */}
            Upcoming Bookings
          </a>
          <a
            href="#"
            className=" text-base font-medium text-gray-700 hover:text-indigo-500 flex items-center"
          >
            <HiUsers size={18} className="mr-2" />{" "}
            {/* Icon for My Communities */}
            My Communities
          </a>
          <a
            href="#"
            className=" text-base font-medium text-gray-700 hover:text-indigo-500 flex items-center"
          >
            <MdAdminPanelSettings size={18} className="mr-2" />{" "}
            {/* Icon for Become a Host */}
            Become a Host
          </a>
          <a
            href="#"
            className=" text-base font-medium text-gray-700 hover:text-indigo-500 flex items-center"
          >
            <FaSignInAlt size={18} className="mr-2" /> {/* Icon for Sign In */}
            Sign In
          </a>
          <a
            href="#"
            className=" text-base font-medium text-gray-700 hover:text-indigo-500 flex items-center"
          >
            <FaSignOutAlt size={18} className="mr-2" />{" "}
            {/* Icon for Sign Out */}
            Sign Out
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
