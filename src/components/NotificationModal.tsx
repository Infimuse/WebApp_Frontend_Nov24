import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoNotifications } from "react-icons/io5";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";

export default function NotificationModal() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <span onClick={() => setOpen(true)} className="relative">
        <span className="p-1 w-1 h-1 rounded-full bg-[#BB2460] absolute top-0 right-0" />
        {open ? (
          <IoNotificationsSharp size={24} className="text-gray-600" />
        ) : (
          <IoNotificationsOutline size={24} className="text-gray-600" />
        )}
      </span>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000000]"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-[98%] sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <IoNotifications
                        className="h-6 w-6 text-[#BB2460]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900"
                      >
                        Rate your Experience
                      </Dialog.Title>
                      <div className="mt-2">
                        <Ratings />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#BB2460] px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none  sm:ml-3 sm:w-auto text-xs sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const Ratings: React.FC = () => {
  const [instructorRating, setInstructorRating] = useState<number | null>(null);
  const [venueRating, setVenueRating] = useState<number | null>(null);
  const [review, setReview] = useState("");

  const faces = [
    { id: 1, emoji: "😡", label: "Very Dissatisfied" },
    { id: 2, emoji: "😟", label: "Dissatisfied" },
    { id: 3, emoji: "😊", label: "Satisfied" },
    { id: 4, emoji: "😁", label: "Very Satisfied" },
  ];

  // const handleSubmit = () => {
  //   const feedback = {
  //     instructorRating,
  //     venueRating,
  //     review,
  //   };
  //   console.log("Feedback submitted:", feedback);
  // };

  return (
    <div className="p-2 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {/* Instructor Rating */}
      <div className="mb-6">
        <h3 className="text-sm text-left font-semibold text-gray-700 mb-2">
          Instructor Satisfaction
        </h3>
        <div className="flex space-x-4">
          {faces.map((face) => (
            <button
              key={face.id}
              onClick={() => setInstructorRating(face.id)}
              className={`p-3 rounded-full border text-xl ${
                instructorRating === face.id
                  ? "bg-purple-100 border-purple-600 text-purple-600"
                  : "bg-gray-100 border-gray-300 text-gray-500"
              }`}
              aria-label={face.label}
            >
              {face.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Venue Rating */}
      <div className="mb-6">
        <h3 className="text-sm text-left font-semibold text-gray-700 mb-2">
          Venue Satisfaction
        </h3>
        <div className="flex space-x-4">
          {faces.map((face) => (
            <button
              key={face.id}
              onClick={() => setVenueRating(face.id)}
              className={`p-3 rounded-full border text-xl ${
                venueRating === face.id
                  ? "bg-purple-100 border-purple-600 text-purple-600"
                  : "bg-gray-100 border-gray-300 text-gray-500"
              }`}
              aria-label={face.label}
            >
              {face.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Review Textarea */}
      <div className="mb-1">
        <h3 className="text-sm text-left font-semibold text-gray-700 mb-2">
          Write a Review
        </h3>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full text-xs p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          rows={4}
          placeholder="Share your thoughts about the experience..."
        ></textarea>
      </div>

      {/* Submit Button */}
    </div>
  );
};
