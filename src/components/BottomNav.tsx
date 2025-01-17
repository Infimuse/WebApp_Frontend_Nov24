"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearch2Fill, RiSearch2Line } from "react-icons/ri";

import {
  IoMailOutline,
  IoMailSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
} from "react-icons/io5";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import NotificationModal from "./NotificationModal";

const navData = [
  {
    name: "Home",
    activeicon: <GoHomeFill size={24} className="text-gray-600" />,
    inActiveIcon: <GoHome size={24} className="text-gray-600" />,
    path: "/",
  },
  {
    name: "Explore",
    activeicon: <RiSearch2Fill size={24} className="text-gray-600" />,
    inActiveIcon: <RiSearch2Line size={24} className="text-gray-600" />,
    path: "/Explore",
  },
  {
    name: "Communities",
    activeicon: <HiUserGroup size={24} className="text-gray-600" />,
    inActiveIcon: <HiOutlineUserGroup size={24} className="text-gray-600" />,
    path: "/communities",
  },
  {
    name: "Messages",
    activeicon: <IoMailSharp size={24} className="text-gray-600" />,
    inActiveIcon: <IoMailOutline size={24} className="text-gray-600" />,
    path: "/messages",
  },

];

const BottomNav = () => {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 left-0 py-3 rounded-t-md right-0 z-50 bg-white border-t border-gray-200 shadow-md sm:hidden">
      <div className="flex justify-around items-center p-2">
        {navData.map((item, index) => (
          <Link href={item.path} key={index} aria-label={item.name}>
            {pathName === item.path ? item.activeicon : item.inActiveIcon}
          </Link>
        ))}
        <NotificationModal />
      </div>
    </div>
  );
};

export default BottomNav;
