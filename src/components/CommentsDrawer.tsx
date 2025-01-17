"use client";

import { Drawer } from "vaul";
import { BsChat } from "react-icons/bs";

interface Props {
  post: string;
  // Add these props if needed
  comments?: Array<{ id: string; text: string; author: string }>;
}

export default function CommentsDrawer(props: Props) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <div className="action-icon hover:[#BB2460]">
          <BsChat size={20} />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 z-[1000] text-xs sm:text-sm h-[80%]  sm:h-[50%] fixed bottom-0 rounded-t-[10px] left-0 right-0 outline-none">
          <div className="flex flex-col h-full bg-white text-black max-w-[1280px] w-full mx-auto">
            {/* Post content at top */}
            <div className="p-4 border-b text-xs sm:text-sm">{props.post}</div>

            {/* Scrollable comments section */}
            <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
              {/* Example comments - replace with your data */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <div>
                      <div className="font-medium">User Name</div>
                      <div className="text-gray-600">
                        Example comment {i + 1}
                      </div>
                    </div>
                    <div className="flex text-[9px] mt-2 gap-3">
                      <span className="hover:text-[#13BAEF]">Like</span>
                      <span className="hover:text-[#BB2460]">Delete</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input section at bottom */}
            <div className="p-4 border-t mt-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BB2460]"
                />
                <button className="px-4 py-2 bg-[#BB2460] text-white rounded-lg">
                  Post
                </button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
