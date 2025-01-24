"use client";

import React from "react";
import Sidebar from "@/components/community/Sidebar";
import Tweets from "@/components/community/Tweets";
import BackButton from "@/components/BackButton";
import RightSidebar from "@/components/community/RightSidebar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  return (
    <div className="bg-white w-full flex flex-col justify-evenly max-w-[1280px] mx-auto">
      <div className="flex w-full flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-4 overflow-x-hidden">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/5 bg-white p-y">
          <Sidebar />
        </div>

        {showModal && <Example />}

        {/* Main content */}
        <main className="border-b border-primary-container_border_color pt-[-5] w-full lg:w-3/5 bg-white lg:p-4 relative overflow-y-auto h-screen">
          {/* This makes the content scrollable */}
          <section className="mb-3">
            <h3 className="text-lg flex items-center gap-3 sm:text-2xl font-bold text-gray-700">
              <BackButton />
              COMMUNITY NAME
            </h3>
            <div className="rounded-lg border p-2">
              <div className=" sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-10 sm:items-center">
                <img
                  src="/assets/image.jpeg"
                  className="w-[150px] h-[150px] rounded-full"
                />

                <article className="text-gray-700">
                  <h2 className="font-bold">Community Name</h2>
                  <p className="font-semibold">Hosted by Victor</p>
                  <div className="flex gap-3 font-bold mt-3">
                    <span
                      className="p-3 hover:bg-gray-100 rounded-lg"
                      onClick={handleButtonClick}
                    >
                      11 Posts
                    </span>
                    <span
                      className="p-3 hover:bg-gray-100 rounded-lg"
                      onClick={handleButtonClick}
                    >
                      3 Team
                    </span>
                    <span
                      className="p-3 hover:bg-gray-100 rounded-lg"
                      onClick={handleButtonClick}
                    >
                      56 Members
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Karen
                    </span>
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Ngong
                    </span>
                    <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
                      Sarit
                    </span>
                  </div>
                </article>
              </div>
              <section className="text-gray-700">
                <div className="text-xs sm:text-sm">
                  A premier polo club offering exciting matches, exclusive
                  events, and a vibrant community of enthusiasts.
                </div>
              </section>

              <div className="flex items-center gap-3 mt-3">
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Sports
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Hiking
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Art
                </span>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center min-h-screen relative">
            {/* Flex container to center content vertically and horizontally */}
            <div className="px-2 w-half max-w-3xl flex-4 mr-10 ml-10">
              {/* Tweets Section */}
              <div className="mx-auto flex flex-col items-center space-y-1">
                <Tweets />
              </div>
            </div>

            {/* Floating button inside the scrollable content */}
          </div>
          <FloatingButton onClick={() => {}} />
        </main>

        {/* Right Sidebar */}
        <aside className="w-full hidden lg:block lg:w-1/5 bg-white">
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

interface Props {
  onClick: () => void;
  label?: React.ReactNode;
}

const FloatingButton = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="hidden  sticky bottom-1/2 transform translate-y-1/2 right-5 w-10 h-10 bg-[#12b9f3] text-white rounded-full shadow-lg  items-center justify-center transition duration-300 z-50"
    >
      {label}
    </button>
  );
};

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Example() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("members");

  const members = ["Alice Johnson", "Bob Smith", "Charlie Brown"];
  const staff = ["Eve White", "Frank Black", "Grace Green"];

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <div>
                  <div className="flex justify-between border-b pb-2">
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "members"
                          ? "border-b-2 border-[#BB2460] text-[#BB2460]"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("members")}
                    >
                      Members
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "staff"
                          ? "border-b-2 border-[#BB2460] text-[#BB2460]"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab("staff")}
                    >
                      Staff
                    </button>
                  </div>

                  <div className="mt-4">
                    {activeTab === "members" && (
                      <ul className="space-y-2">
                        {members.map((member, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {member}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeTab === "staff" && (
                      <ul className="space-y-2">
                        {staff.map((staffMember, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {staffMember}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
