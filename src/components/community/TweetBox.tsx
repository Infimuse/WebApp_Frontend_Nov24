import React, { useState } from "react";
import { Media, Gif,  Emoji, Plans } from "./İcons";
import { FaUserCircle } from "react-icons/fa"; // Profile icon or image
import { IoClose } from "react-icons/io5"; // Close button
import FloatingButton from "../FloatingButton";
import { MdEdit } from "react-icons/md";

interface GifPickerProps {
  onClose: () => void;
  onSelectGif: React.Dispatch<React.SetStateAction<string | null>>;
}
const GifPicker = ({ onSelectGif, onClose }: GifPickerProps) => {
  const gifs = [
    "https://media.giphy.com/media/l0IylN8P4eqjXhQ9O/giphy.gif",
    "https://media.giphy.com/media/xT9IgFQ1GzFzI7mYBy/giphy.gif",
    "https://media.giphy.com/media/5xaOcL3Q6C8dyZkzX3y/giphy.gif",
  ];

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-8">
        <h3 className="font-bold mb-2">Select a GIF</h3>
        <div className="grid grid-cols-3 gap-2">
          {gifs.map((gif, index) => (
            <img
              key={index}
              src={gif}
              alt={`GIF ${index}`}
              className="cursor-pointer w-full h-20 object-cover"
              onClick={() => {
                onSelectGif(gif);
                onClose();
              }}
            />
          ))}
        </div>
        <button onClick={onClose} className="mt-2 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

interface EmojiPickerProps {
  onClose: () => void;
  onSelectEmoji: (item: string) => void;
}
const EmojiPicker = ({ onSelectEmoji, onClose }: EmojiPickerProps) => {
  const emojis = ["😊", "😂", "😍", "😢", "😎", "😡"];

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-4">
        <h3 className="font-bold mb-2">Select an Emoji</h3>
        <div className="flex space-x-2">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="text-3xl cursor-pointer"
              onClick={() => {
                onSelectEmoji(emoji);
                onClose();
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <button onClick={onClose} className="mt-2 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

interface PlansPickerProps {
  onSelectDate: React.Dispatch<React.SetStateAction<string | null>>;
  onClose: () => void;
}
const PlansPicker = ({ onSelectDate, onClose }: PlansPickerProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-4">
        <h3 className="font-bold mb-2">Schedule a Post</h3>
        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => onSelectDate(e.target.value)}
        />
        <button onClick={onClose} className="mt-2 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default function LinkedInPostBox() {
  const [postContent, setPostContent] = useState("");
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [selectedDate, setSelectedDate] = useState<null | string>(null);
  const [showModal, setShowModal] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showPlansPicker, setShowPlansPicker] = useState(false);

  // New Audience Selector states
  const [audience, setAudience] = useState("Public");
  const [isAudienceDropdownOpen, setIsAudienceDropdownOpen] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setPostContent("");
    setSelectedGif(null);
    setSelectedImage(null);
    setSelectedDate(null);
    setShowGifPicker(false);
    setShowEmojiPicker(false);
    setShowPlansPicker(false);
  };

  const handlePostSubmit = () => {
    if (!postContent && !selectedGif && !selectedImage && !selectedDate) return;
    alert(`Post submitted: ${postContent}`);
    closeModal();
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file)); // Preview image
  };

  const handleSelectEmoji = (emoji: string) => {
    setPostContent((prevContent) => prevContent + emoji);
  };

  // Handle Audience Change
  const handleAudienceChange = (newAudience: string) => {
    setAudience(newAudience);
    setIsAudienceDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      {/* Start a Post button */}
      {/* <div className="bg-white w-full hidden sm:block p-4 rounded-xl shadow-md mb-4 border border-gray-300">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <FaUserCircle className="w-10 h-10 text-gray-600" />
          <p className="text-gray-500">Share your thoughts</p>
        </div>
        <div className="flex justify-between mt-3">
          <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Media />
            <span className="text-sm text-gray-600">Media</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Plans />
            <span className="text-sm text-gray-600">Progress</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Survey />
            <span className="text-sm text-gray-600">Insights</span>
          </button>
        </div>
      </div> */}

      <div>
        <FloatingButton label={<MdEdit />} onClick={() => setShowModal(true)} />
      </div>
      {/* Modal for posting */}
      {showModal && (
        <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg sm:w-full w-[90%] max-w-lg p-4 relative">
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <IoClose className="text-gray-600 w-6 h-6" />
            </button>

            {/* Profile Section */}
            <div className="flex items-center mb-4">
              <FaUserCircle className="w-12 h-12 text-gray-600" />
              <div className="ml-3">
                <p className="font-bold">Your Name</p>

                {/* Audience Selector */}
                <div className="relative">
                  <button
                    className="text-sm text-gray-500 flex items-center space-x-1 mt-1 hover:bg-gray-100 p-1 rounded"
                    onClick={() =>
                      setIsAudienceDropdownOpen(!isAudienceDropdownOpen)
                    }
                  >
                    <span>{audience}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Audience Dropdown */}
                  {isAudienceDropdownOpen && (
                    <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-40 z-50">
                      <ul>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleAudienceChange("Public")}
                        >
                          Public
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleAudienceChange("Community 1")}
                        >
                          Community 1
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleAudienceChange("Community 2")}
                        >
                          Community 2
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleAudienceChange("Community 3")}
                        >
                          Community 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Display Selected Items */}
            <div className="mt-2">
              {selectedGif && (
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedGif}
                    alt="Selected GIF"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    onClick={() => setSelectedGif(null)}
                    className="text-red-500"
                  >
                    Remove GIF
                  </button>
                </div>
              )}
              {selectedImage && (
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-red-500"
                  >
                    Remove Image
                  </button>
                </div>
              )}
              {selectedDate && (
                <div className="flex items-center space-x-2">
                  <span>{`Scheduled for: ${selectedDate}`}</span>
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="text-red-500"
                  >
                    Remove Date
                  </button>
                </div>
              )}
            </div>

            {/* Post Textarea */}
            <textarea
              className="w-full p-2 h-28 bg-gray-100 text-gray-500 rounded-lg resize-none outline-none mt-2"
              placeholder="What do you want to talk about?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />

            {/* Action Bar */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                {/* Media upload */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleMediaUpload(e)}
                  className="hidden"
                  id="mediaUpload"
                />
                <label
                  htmlFor="mediaUpload"
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                >
                  <Media />
                </label>

                {/* GIF */}
                <button
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={() => setShowGifPicker(true)}
                >
                  <Gif />
                </button>

                {/* Emoji */}
                <button
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={() => setShowEmojiPicker(true)}
                >
                  <Emoji />
                </button>

                {/* Plans */}
                <button
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={() => setShowPlansPicker(true)}
                >
                  <Plans />
                </button>
              </div>

              {/* Post Button */}
              <button
                className={`py-2 px-4 rounded-full text-white font-bold ${
                  postContent || selectedGif || selectedImage || selectedDate
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handlePostSubmit}
                disabled={
                  !postContent &&
                  !selectedGif &&
                  !selectedImage &&
                  !selectedDate
                }
              >
                Post
              </button>
            </div>

            {/* Show GIF Picker */}
            {showGifPicker && (
              <GifPicker
                onSelectGif={setSelectedGif}
                onClose={() => setShowGifPicker(false)}
              />
            )}

            {/* Show Emoji Picker */}
            {showEmojiPicker && (
              <EmojiPicker
                onSelectEmoji={handleSelectEmoji}
                onClose={() => setShowEmojiPicker(false)}
              />
            )}

            {/* Show Plans Picker */}
            {showPlansPicker && (
              <PlansPicker
                onSelectDate={setSelectedDate}
                onClose={() => setShowPlansPicker(false)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
