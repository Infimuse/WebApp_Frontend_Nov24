
'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full"
    >
      <FaArrowLeftLong size={16}/>
    </button>
  );
};

export default BackButton;