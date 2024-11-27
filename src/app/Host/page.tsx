import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const host = {
  name: 'Kevin Hart',
  hostingSince: '2024',
  occupation: 'Comedian/businessman',
  school: 'Juja High School',
  funFact: 'I was a nationally competitive swimmer',
  pets: 'My two dogs',
  language: 'English',
  location: 'Karen, Ke',
  bio: 'Kevin Otieno is a renowned comedian and businessman with a passion for hosting and entertaining. He loves working and is obsessed with stand-up comedy and comedians in general.',
  profilePicture: 'https://randomuser.me/api/portraits/men/89.jpg', // Update with actual image path
  listings: [
    {
      title: 'Pottery Workshop',
      image: 'https://images.pexels.com/photos/1675993/pexels-photo-1675993.jpeg', // Update with actual image path
      description: 'Learn the art of pottery and create your own masterpieces.',
      venue: 'Art Studio, Nairobi',
      price: '$50',
    },
    {
      title: 'Sip and Paint',
      image: 'https://images.pexels.com/photos/20197465/pexels-photo-20197465.jpeg', // Update with actual image path
      description: 'Enjoy a fun evening of painting with friends while sipping your favorite drinks.',
      venue: 'Karen Country Club',
      price: '$40',
    },
    {
      title: 'Beginner Guitar Class',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg', // Update with actual image path
      description: 'Learn the basics of playing the guitar in this beginner-friendly class.',
      venue: 'Music House, Nairobi',
      price: '$30',
    },
    {
      title: 'Drawing Class',
      image: 'https://images.pexels.com/photos/1767016/pexels-photo-1767016.jpeg', // Update with actual image path
      description: 'Develop your drawing skills in a guided class.',
      venue: 'Downtown Art Center, Nairobi',
      price: '$25',
    },
    // Add more listings if needed
  ],
};

const HostDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <Image src={host.profilePicture} alt={host.name} width={150} height={150} className="rounded-full" />
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{host.name}</h1>
              <p className="text-lg"><strong>Hosting Since:</strong> {host.hostingSince}</p>
              <p className="text-lg"><strong>Occupation:</strong> {host.occupation}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-lg"><strong>School:</strong> {host.school}</p>
            <p className="text-lg"><strong>Fun Fact:</strong> {host.funFact}</p>
            <p className="text-lg"><strong>Pets:</strong> {host.pets}</p>
            <p className="text-lg"><strong>Speaks:</strong> {host.language}</p>
            <p className="text-lg"><strong>Location:</strong> {host.location}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
          <p>{host.bio}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {host.listings.map((listing, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <Image src={listing.image} alt={listing.title} width={300} height={200} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{listing.title}</h3>
                <p className="mt-2">{listing.description}</p>
                <p className="text-lg"><strong>Venue:</strong> {listing.venue}</p>
                <p className="text-lg"><strong>Price:</strong> {listing.price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-2">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostDetail;
