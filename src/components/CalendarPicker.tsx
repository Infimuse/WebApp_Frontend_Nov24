"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LuCalendar } from "react-icons/lu";
import { DayEventHandler, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Import the default styles

type SelectedDates = {
  startDate: Date;
  endDate: Date;
};

export default function CalendarPicker() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const [selectedDates, setSelectedDates] = useState<SelectedDates | null>(
    null
  );

  const handleDateChange = (range: {
    from: Date | undefined;
    to: Date | undefined;
  }) => {
    if (range.from && range.to) {
      setSelectedDates({
        startDate: range.from,
        endDate: range.to,
      });
    }
  };

  useEffect(() => {
    const today = new Date();
    setSelectedDates({
      startDate: today,
      endDate: new Date(today.setDate(today.getDate() + 14)),
    });
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-3 shadow text-gray-600 rounded-md bg-gray-100 h-full flex items-center justify-center"
      >
        <LuCalendar />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000]"
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl z-[1000] transition-all w-[95%] sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className=" text-gray-600">
                    <DayPicker
                      selected={
                        selectedDates
                          ? {
                              from: selectedDates.startDate,
                              to: selectedDates.endDate,
                            }
                          : undefined
                      }
                      onDayClick={
                        handleDateChange as unknown as DayEventHandler<React.MouseEvent>
                      }
                      mode="range" // Enables range selection
                      disabled={{ before: new Date() }} // Disables past dates
                    />
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#BB2460] px-4 py-2 text-base font-medium text-white shadow-sm sm:col-start-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
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
