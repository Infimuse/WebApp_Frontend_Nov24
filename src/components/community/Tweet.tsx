import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import {useState} from "react"
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

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const shouldTruncate = tweet?.text.length > 150;
  const displayText = isExpanded || !shouldTruncate ? tweet.text : `${tweet.text.slice(0, 150)}...`;


  return (
    <div key={tweet.id} className="tweet-container w-screen lg:w-full">
      <div className="flex flex-col items-start pt-6">
        <div className=" flex gap-3 mb-1 px-2">
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
      <p className="text-gray-700">{displayText}</p>
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
          <div className="flex  gap-2">
<li className="center-item flex items-center gap-1">
            <div className="action-icon hover:text-red-600">
              <FaHeart size={20} />
            </div>
            <span>{tweet.likes}</span>
          </li>

          <li className="center-item flex items-center gap-1">
            <div className="action-icon hover:text-red-600">
              <FaComment size={20} />
            </div>
            <span>{tweet.replies}</span>
          </li>
          </div>
          
          <li className="center-item flex items-center gap-1 align-right">
            <div className="action-icon hover:text-red-600">
              <FaShare size={20} />
            </div>
            <span>{tweet.shares}</span>
          </li>
        </ul>
      </div>
      {/* <img src={tweet.portrait} className="tweet-portrait-left" alt="User Portrait" /> */}
      {/* <img src={tweet.portrait} className="tweet-portrait-right" alt="User Portrait" /> */}
    </div>
  );
};

export default Tweet;
