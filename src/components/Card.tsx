import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaUsers,
} from "react-icons/fa";

interface CardProps{
  id: string, image: string, title: string, host: string, price: string, rating: number, slotsBooked: number;
}
const Card = ({ id, image, title, host, price, rating, slotsBooked }:CardProps) => {
  const ratingStars = Array.from({ length: 1 }, (_, i) => (
    <FaStar key={i} color={rating > i ? "gold" : "lightgray"} />
  ));

  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden max-w-[100%] min-w-[300px] h-auto relative">
      <Link href={`/experience/${id}`}>
        <div className="relative w-full h-40">
          <Image src={image} alt={title} fill className="object-cover"/>
          {/* Slots Left */}
          <div className="absolute bottom-0 left-0  bg-[#BB2460] font-bold text-white  py-1 px-3 m-2  rounded-2xl text-sm">
            {/* <FaUsers className="inline mr-1"/> */}
            {slotsBooked} slots left
          </div>
          {/* Rating */}
          <div className="absolute flex  bottom-0 right-0  bg-black bg-opacity-25 text-white py-1 rounded-full px-2 text-sm m-2  mr-2  ">
            {ratingStars}
            <span className="mt-[-2px] ">{rating}</span>
          </div>
        </div>
      </Link>
      <div
        className="p-4 flex flex-col justify-between space-y-2"
        style={{ minHeight: "160px" }}
      >
        <h3 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </h3>
        <p className="text-gray-500 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">
          Hosted by {host}
        </p>

        <div className="text-gray-500 text-sm flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          <span>Nairobi Westlands</span>
        </div>

        <div className="text-gray-500 flex text-sm items-center">
          <FaCalendarAlt className="inline mr-2" />
          <span>Sat, 26 Jun 06:00 PM</span>
        </div>

        <div className="text-gray-500 flex text-sm items-center">
          <FaMoneyBillAlt className="inline mr-2" /> Ksh {price}
        </div>

        <Link href={`/experience/${id}`}>
          <button className="bg-[#12B9f3] text-white py-2 w-full rounded-lg mt-2">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  slotsBooked: PropTypes.number.isRequired,
};

export default Card;
