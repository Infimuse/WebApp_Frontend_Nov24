"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button after scrolling 300px
      } else {
        setIsVisible(false); // Hide button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-[70px] p-3 z-[10000] rounded-full bg-[#bb2460] text-white shadow-lg hover:bg-[#df5b90] transition duration-300"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
