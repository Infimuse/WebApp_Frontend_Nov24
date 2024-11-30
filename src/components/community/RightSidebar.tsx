import { Search, Circle } from './İcons';

export default function AllBox() {
    return (
        <div className="sticky top-4 "> {/* Removed ml-40 to fit into the 25% column */}
            <div className="flex items-center space-x-1 p-1 border rounded-full bg-primary-search_box text-black focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
                <div className="pl-2">
                    <Search />
                </div>
                <input
                    className="focus:outline-none bg-transparent w-full"
                    type="text"
                    placeholder="Search Infimuse"
                />
            </div>


            <div className="bg-primary-trends_fy_color rounded-xl p-1 mb-2">
                {/* My Communities Section */}
                <div className="rounded border-gray-200 cursor-pointer mb-4 h-full p-4">
                    <div className="flex items-center">
                        <span className="text-sm font-bold text-black p-1 -mt-4">My Communities</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle />
                        </div>
                    </div>
                    <div className="p-2 text-gray-700 font-bold">SquidGames</div>
                    <div className="p-2 text-gray-700">30K Posts</div>
                </div>

                {/* Host Communities Section */}
                <div className="rounded border-gray-200 cursor-pointer h-full p-4">
                    <div className="flex items-center">
                        <span className="text-sm font-bold text-black p-2 -mt-4">Host Communities</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle />
                        </div>
                    </div>
                    <div className="p-2 text-gray-700 font-bold">NewTopic</div>
                    <div className="p-2 text-gray-700">10K Posts</div>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center items-center"> {/* Parent div for centering */}
                    <div className="flex justify-center items-center p-2 transform transition-colors duration-200 bg-primary-widgets_background_color cursor-pointer mt-1">
                        <span className="bg-blue-500 text-white font-bold py-1 text-center px-4 rounded text-sm">Show more</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

