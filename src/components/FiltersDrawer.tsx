"use client";

import { Drawer } from "vaul";
import React from "react"
import { LuSettings2 } from "react-icons/lu";
import FilterSelector from "./FilterSelector";

export default function CommentsDrawer() {
   const [open, setOpen] = React.useState(false);
  return (
    <Drawer.Root  open={open} onOpenChange={setOpen}>
      <Drawer.Trigger>
        <div className="action-icon hover:text-red-600 p-3 shadow text-gray-600 rounded-md bg-gray-100 h-full flex items-center justify-center ">
          <LuSettings2 size={20} />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 z-[1000] text-xs sm:text-sm h-[80%]  sm:h-[50%] fixed bottom-0 rounded-t-[10px] left-0 right-0 outline-none">
          <div className="flex flex-col h-full bg-white text-black max-w-[1280px] w-full mx-auto">
            {/* Post content at top */}
            <div className="p-4 border-b text-xs flex justify-between font-semibold items-center sm:text-sm">
              <div onClick={() => setOpen(false)} className="text-[#BB2460]">Cancel</div>
              <div>Filters</div>
              <div className="text-[#BB2460]">Reset</div>
            </div>

            {/* Scrollable comments section */}
            <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
              {/* Example comments - replace with your data */}
              <div className="space-y-4">
                <FilterSelector
                  title="Time of Day"
                  sides={[{ id: 1, name: "Any Time" }]}
                />

                <FilterSelector
                  title="Venue"
                  sides={[
                    { id: 1, name: "Any Venue" },
                    { id: 2, name: "In Person" },
                    { id: 3, name: "Online" },
                  ]}
                />
                <FilterSelector
                  title="Distance"
                  sides={[
                    { id: 1, name: "Any Distance" },
                    { id: 2, name: "5 km" },
                    { id: 3, name: "10 km" },
                    { id: 4, name: "25 km" },
                    { id: 5, name: "100 km" },
                    { id: 6, name: "150 km" },
                  ]}
                />
                <FilterSelector
                  title="Date"
                  sides={[
                    { id: 1, name: "Upcoming" },
                    { id: 2, name: "Starting Soon" },
                    { id: 3, name: "Today" },
                    { id: 4, name: "Tomorrow" },
                    { id: 5, name: "This Weekend" },
                    { id: 6, name: "Next Week" },
                    { id: 7, name: "Next Weekend" },
                  ]}
                />
              </div>
            </div>

            {/* Input section at bottom */}
            <div className="p-4 border-t mt-auto">
              <button onClick={() => setOpen(false)} className="w-full h-full rounded-lg p-3 text-center text-white bg-[#BB2460] font-bold">
                Apply Filters
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
