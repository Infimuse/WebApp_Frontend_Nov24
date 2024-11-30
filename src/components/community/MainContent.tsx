// import { TopTIcon } from '@/components/community/İcons'
import TweetBox from '@/components/community/TweetBox';
import Tweets from '@/components/community/Tweets';
import Categories from '@/components/community/categories';
import Location from '@/components/community/location';

export default function ContainerPage() {
    return (
         <div className="flex justify-center items-center min-h-screen">
         {/* Flex container to center content vertically and horizontally */}
            {/* <div className="px-2 ml-10 w-full flex-2"> Center content and restrict the width */}
            <div className="px-2  w-half max-w-3xl flex-4 mr-10 ml-10">
                {/* User image and TweetBox */}
                <div className="flex w-full justify-center p-5">
                    {/* <img className="rounded-full h-5 w-5 mt-1" src="https://randomuser.me/api/portraits/women/57.jpg" /> */}
                    <TweetBox />
                </div>

                {/* Categories Section */}
                <div className="flex w-screen lg:w-full justify-center">
                    <Categories />
                </div>

                 {/* Location Section */}
                 <div className="flex justify-center w-screen lg:w-full items-center   0 py-6 border-b ">
                    <Location />
                </div>

                {/* Tweets Section */}
                <div className="mx-auto flex flex-col items-center space-y-4">
                    <Tweets />
                </div>
            </div>
        </div>
    );
}