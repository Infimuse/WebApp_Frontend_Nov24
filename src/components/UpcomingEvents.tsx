import React from "react";
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { IoWarningOutline } from "react-icons/io5";

interface Event {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
}

const BookedEventsCarousel: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg",
      title: "Wine Tasting",
      location: "Vineyard",
      date: "Jan 12, 2025",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
      title: "Beer Brewing Workshop",
      location: "Local Brewery",
      date: "Jan 15, 2025",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
      title: "Cocktail Mixology Class",
      location: "Mixology Bar",
      date: "Jan 20, 2025",
    },
  ];

  // const scrollLeftButton = (): void => {
  //   const carousel = document.getElementById('carousel');
  //   if (carousel) {
  //     carousel.scrollBy({ left: -200, behavior: 'smooth' });
  //   }
  // };

  // const scrollRightButton = (): void => {
  //   const carousel = document.getElementById('carousel');
  //   if (carousel) {
  //     carousel.scrollBy({ left: 200, behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="relative sm:hidden px-4 w-full overflow-hidden">
      {/* <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={scrollLeftButton}
          className="text-white bg-black/50 p-2 rounded-full"
        >
          <IoIosArrowBack size={16} />
        </button>
        <button
          onClick={scrollRightButton}
          className="text-white bg-black/50 p-2 rounded-full"
        >
          <IoIosArrowForward size={16} />
        </button>
      </div> */}

      {/* Normal Horizontal Scrolling */}
      <h3 className="text-black font-semibold mb-2 text-sm text-left">
        Upcoming Bookings
      </h3>
      <div
        id="carousel"
        className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="relative flex-none w-3/4 sm:w-1/3 h-full rounded-lg shadow-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-lg">
              <h3 className="text-white font-semibold text-sm">
                {event.title}
              </h3>
              <p className="text-white font-thin text-xs">{event.location}</p>
              <p className="text-white font-thin text-xs">{event.date}</p>
            </div>
          </div>
        ))}

        {events.length < 1 && (
          <p className="text-center text-black p-4 text-xs flex flex-col justify-center items-center gap-2 font-semibold w-full">
            <IoWarningOutline size={25} color="#bb2460" />
            No events here yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default BookedEventsCarousel;
