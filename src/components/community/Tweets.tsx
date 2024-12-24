
import React, { useState } from 'react';
import { FaHeart, FaComment, FaTelegramPlane } from 'react-icons/fa';
// import './Tweets.css';


const MAX_LENGTH = 200; // Max characters before "Show more"

interface Props{
    text:string
}
function TweetText({ text }:Props) {
    const [isExpanded, setIsExpanded] = useState(false); // To toggle between expanded and truncated text
    const toggleExpand = () => setIsExpanded(!isExpanded); // Toggle the text

    const shouldTruncate = text.length > MAX_LENGTH; // Check if the text exceeds max length
    const displayedText = isExpanded ? text : text.slice(0, MAX_LENGTH); // Determine text display

    return (
        <div className="tweet-text-container">
            <p className="tweet-text text-black">
                {displayedText}
                {shouldTruncate && (
                    <span>
                        {!isExpanded && '...'}
                    </span>
                )}
            </p>
            {shouldTruncate && (
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 cursor-pointer text-xs hover:underline show-more-button"
                >
                    {isExpanded ? 'Show less' : 'Show more'}
                </button>
            )}
        </div>
    );
}

export default function Tweets() {
    const tweets = [
        {
            id: 1,
            portrait: 'https://randomuser.me/api/portraits/women/50.jpg',
            name: 'AdemCan',
            username: '@CertelAdemcan',
            time: '49m',
            text: 'Photography Workshop @ Photo Studio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
            image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg',
            replies: 20,
            likes: 9900,
            shares: 2,
        },
        {
            id: 2,
            portrait: 'https://randomuser.me/api/portraits/women/57.jpg',
            name: 'AdemCan',
            username: '@CertelAdemcan',
            time: '1h',
            text: 'Cocktail Mixology Class',
            image: 'https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg',
            replies: 40,
            likes: 7000,
            shares: 1,
        },
        {
            id: 3,
            portrait: 'https://randomuser.me/api/portraits/men/32.jpg',
            name: 'John Doe',
            username: '@JohnDoe',
            time: '2h',
            text: 'Exploring the mountains! #adventure #travel',
            image: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
            replies: 25,
            likes: 6000,
            shares: 4,
        },
        {
            id: 5,
            portrait: 'https://randomuser.me/api/portraits/women/45.jpg',
            name: 'Jane Roe',
            username: '@JaneRoe',
            time: '4h',
            text: 'A quiet evening at the beach. #serene #peace',
            image: 'https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg',
            replies: 15,
            likes: 12000,
            shares: 3,
        },
    ];

    return (
        <>
            {tweets.map(tweet => (
                <div key={tweet.id} className="tweet-container w-screen lg:w-full">
                    <div className="flex flex-col items-start pt-6">
                        <div className=" flex gap-3 mb-2 px-2">
                            <img src={tweet.portrait} width={50} className="rounded-full" height={50} />
                            <div className="flex flex-col">
                            <span className="tweet-name text-black">{tweet.name}</span>
                            <span className="text-gray-700">{tweet.username} . {tweet.time}</span>
                            </div>
                        </div>
                        <img className="" src={tweet.image} alt="Tweet Visual" />

                        <ul className="flex gap-3 px-2">
                            <li className="center-item flex items-center gap-1">
                                <div className="action-icon hover:text-red-600">
                                    <FaHeart size={18}/>
                                </div>
                                <span>{tweet.likes}</span>
                            </li>

                            <li className="center-item flex items-center gap-1">
                                <div className="action-icon hover:text-red-600">
                                    <FaComment size={16}/>
                                </div>
                                <span>{tweet.replies}</span>
                            </li>
                            <li className="center-item flex items-center gap-1">
                                <div className="action-icon hover:text-red-600">
                                    <FaTelegramPlane size={18}/>
                                </div>
                                <span>{tweet.shares}</span>
                            </li>
                        </ul>
                    </div>
                    {/* <img src={tweet.portrait} className="tweet-portrait-left" alt="User Portrait" /> */}
                    {/* <img src={tweet.portrait} className="tweet-portrait-right" alt="User Portrait" /> */}
                </div>
            ))}
        </>
    );
}
