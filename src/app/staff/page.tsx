import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const instructor = {
  name: 'Lisa Mwangi',
  bio: 'Lisa Mwangi is an experienced cake decorator with a passion for teaching. She enjoys sharing her knowledge and helping others perfect their cake decorating skills.',
  school: 'Kenya Utalii College',
  funFact: 'I have a black belt in karate',
  pets: 'A cat named Whiskers',
  language: 'Swahili, English',
  location: 'Nairobi, Kenya',
  profilePicture: 'https://randomuser.me/api/portraits/women/50.jpg', // Update with actual image path
  classesInstructed: [
    {
      title: 'Bake Your Own French Croissant',
      description: 'Learn the foundations of cake decorating and several piping techniques, including shells, stars, zig-zag, and rosettes.',
      rating: 4.8,
    },
    {
      title: 'Advanced Cake Decoration',
      description: 'Master advanced cake decoration techniques with fondant and gum paste.',
      rating: 4.7,
    },
    {
      title: 'Pastry Perfection',
      description: 'Discover the secrets of perfect pastries, from dough to decoration.',
      rating: 4.9,
    },
    // Add more classes if needed
  ],
};

const InstructorDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <Image src={instructor.profilePicture} alt={instructor.name} width={150} height={150} className="rounded-full" />
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{instructor.name}</h1>
              <p className="text-lg"><strong>School:</strong> {instructor.school}</p>
              <p className="text-lg"><strong>Fun Fact:</strong> {instructor.funFact}</p>
              <p className="text-lg"><strong>Pets:</strong> {instructor.pets}</p>
              <p className="text-lg"><strong>Speaks:</strong> {instructor.language}</p>
              <p className="text-lg"><strong>Location:</strong> {instructor.location}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
          <p className="text-lg leading-relaxed">{instructor.bio}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Classes Instructed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructor.classesInstructed.map((classItem, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-semibold">{classItem.title}</h3>
                <p className="mt-2">{classItem.description}</p>
                <div className="flex items-center mt-4">
                  <div className="text-yellow-500 flex items-center">
                    {'⭐'.repeat(Math.round(classItem.rating))}
                    {'⭐'.repeat(5 - Math.round(classItem.rating))} {/* For empty stars */}
                  </div>
                  <p className="ml-2 text-lg">{classItem.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDetail;
