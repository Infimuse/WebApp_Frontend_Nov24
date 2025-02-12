import { ChangeEvent, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
  const [editImage, setEditImage] = useState(false);

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the file name
    } else {
      setFileName(""); // Clear file name if no file is selected
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group w-full rounded-md bg-gray-100 px-2 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200">
          <span className="flex w-full items-center justify-between">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium text-gray-900">
                  Test User
                </span>
                <span className="truncate text-sm text-gray-500">
                  @jessyschwarz
                </span>
              </span>
            </span>
            <ChevronUpDownIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => setEditImage(!editImage)}
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Edit Image
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <div className="text-gray-600 text-xs flex border border-dotted text-center flex-col gap-2 p-2">
                  <label
                    htmlFor="fileInput"
                    className="custom-file-label"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#fff",
                      color: "#777",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {fileName || "Choose File"}
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={(e) => handleFileChange(e)}
                    style={{
                      display: "none", // Hide the default input
                    }}
                  />
                  {fileName && <p>Selected File: {fileName}</p>}
                  <button className="p-1.5 text-white mx-2 rounded-md bg-[#BB2460]">
                    Change
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
