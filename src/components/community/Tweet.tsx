import { BiShare } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import { BsChat } from "react-icons/bs";

interface Props {
  tweet: {
    id: number;
    portrait: string;
    name: string;
    username: string;
    time: string;
    text: string;
    image: string;
    replies: number;
    likes: number;
    shares: number;
  };
}

const Tweet = ({ tweet }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const shouldTruncate = tweet?.text.length > 150;
  const displayText =
    isExpanded || !shouldTruncate
      ? tweet.text
      : `${tweet.text.slice(0, 150)}...`;

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div key={tweet.id} className="tweet-container mb-3 w-screen lg:w-full">
      <div className="flex flex-col items-start pt-6">
        <div className="flex gap-3 mb-1 px-2">
          <img
            src={tweet.portrait}
            width={50}
            className="rounded-full"
            height={50}
          />
          <div className="flex flex-col">
            <span className="tweet-name text-black">{tweet.name}</span>
            <span className="text-gray-700 text-xs">
              {tweet.username} . {tweet.time}
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray-700 text-sm pl-1">{displayText}</p>
          {shouldTruncate && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>
        {tweet.image && (
          <img className="" src={tweet.image} alt="Tweet Visual" />
        )}

        <ul className="flex justify-between w-full gap-3 mt-2 px-2">
          <div className="flex gap-2">
            <li className="center-item flex items-center gap-1">
              <div className="action-icon hover:text-red-600">
                <HiOutlineHeart size={20} />
              </div>
            </li>

            <li className="center-item flex items-center gap-1">
              <div className="action-icon hover:text-red-600">
                <BsChat size={20} />
              </div>
              <span>{tweet.replies}</span>
            </li>
          </div>

          <li className="center-item flex items-center gap-1 align-right">
            <div className="action-icon hover:text-red-600">
              <BiShare size={20} />
            </div>
            <span>{tweet.shares}</span>
          </li>
        </ul>

        <p className="text-gray-700 text-sm font-semibold px-2">
          {tweet.likes} likes
        </p>

        {/* Comments Section */}
        <div className="w-full px-2 mt-4">
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md text-gray-600 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Post
            </button>
          </div>
          {comments.length > 0 && (
            <div className="comments-list pl-3 text-gray-600">
              <p className="text-sm font-semibold mb-2">Comments:</p>
              <ul className="space-y-2">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 bg-gray-100 p-2 rounded-md"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
