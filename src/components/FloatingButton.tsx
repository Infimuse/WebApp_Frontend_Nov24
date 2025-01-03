import React from "react";

interface Props {
  onClick: () => void;
  label?: React.ReactNode;
}

const FloatingButton = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-5 w-10 h-10 bg-[#12b9f3] text-white rounded-full shadow-lg flex items-center justify-center  transition duration-300 z-50"
    >
      {label}
    </button>
  );
};

export default FloatingButton;
