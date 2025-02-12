import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Image from "next/image";

const instructor = {
  name: "Lisa Mwangi",
  bio: "Lisa Mwangi is an experienced cake decorator with a passion for teaching. She enjoys sharing her knowledge and helping others perfect their cake decorating skills.",
  school: "Kenya Utalii College",
  funFact: "I have a black belt in karate",
  pets: "A cat named Whiskers",
  language: "Swahili, English",
  location: "Nairobi, Kenya",
  profilePicture: "https://randomuser.me/api/portraits/women/50.jpg", // Update with actual image path
  classesInstructed: [
    {
      title: "Bake Your Own French Croissant",
      description:
        "Learn the foundations of cake decorating and several piping techniques, including shells, stars, zig-zag, and rosettes.",
      rating: 4.8,
    },
    {
      title: "Advanced Cake Decoration",
      description:
        "Master advanced cake decoration techniques with fondant and gum paste.",
      rating: 4.7,
    },
    {
      title: "Pastry Perfection",
      description:
        "Discover the secrets of perfect pastries, from dough to decoration.",
      rating: 4.9,
    },
    // Add more classes if needed
  ],
};

const InstructorDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-2.5 sm:p-6 mb-4 sm:mb-8">
          <BackButton />
          <div className="flex sm:gap-20 flex-col sm:flex-row sm:items-center mt-3 sm:mb-6">
            <Image
              src={instructor.profilePicture}
              alt={instructor.name}
              width={150}
              height={150}
              className="rounded-full mb-3 w-20 sm:w-[150px] h-20 sm:h-[150px]"
            />
            <div className="sm:ml-6">
              <h1 className="text-lg sm:text-3xl font-bold">
                {instructor.name}
              </h1>
              <p className="text-xs sm:text-lg">
                <strong>School:</strong> {instructor.school}
              </p>

              <div className="flex items-center gap-3 mt-3">
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Karen
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Ngong Road
                </span>
                <span className="px-3 py-1 text-white text-xs bg-[#13BAEF] rounded-2xl">
                  Kilimani
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
              Badminton
            </span>
            <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
              Padel
            </span>
            <span className="px-3 py-1 text-white text-xs bg-[#BB2460] rounded-2xl">
              Table Tennis
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2.5 sm:p-6 mb-3 sm:mb-8">
          <h2 className="text-sm sm:text-2xl font-bold mb-4">Bio</h2>
          <p className="text-xs sm:text-lg leading-relaxed">{instructor.bio}</p>
        </div>
        <div className="my-3 flex gap-5 py-5 overflow-auto">
          {experiences.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-2.5 sm:p-6 mb-8">
          <h2 className="text-sm sm:text-2xl font-bold mb-4">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructor.classesInstructed.map((classItem, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-sm sm:text-xl font-semibold">
                  {classItem.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm">
                  {classItem.description}
                </p>
                <div className="flex items-center mt-4">
                  <div className="text-yellow-500 text-xs sm:text-sm flex items-center">
                    {"⭐".repeat(Math.round(classItem.rating))}
                    {"⭐".repeat(5 - Math.round(classItem.rating))}{" "}
                    {/* For empty stars */}
                  </div>
                  <p className="ml-2 text-xs sm:text-lg">{classItem.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDetail;

const experiences = [
  // Sipping Hangouts
  {
    id: "10",
    image: "https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg",
    title: "Wine Tasting",
    host: "Vineyard",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 50",
    rating: 4.5,
    slotsBooked: 10,
  },
  {
    id: "144",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "5",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  {
    id: "141",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "159",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
  {
    id: "14",
    image: "https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg",
    title: "Beer Brewing Workshop",
    host: "Local Brewery",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 60",
    rating: 4.3,
    slotsBooked: 7,
  },
  {
    id: "15",
    image: "https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg",
    title: "Cocktail Mixology Class",
    host: "Mixology Bar",
    status: "Upcoming",
    category: "Sipping Hangouts",
    price: " 70",
    rating: 4.7,
    slotsBooked: 12,
  },
];
