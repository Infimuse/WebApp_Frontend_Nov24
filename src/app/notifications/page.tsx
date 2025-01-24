"use client";
import { Ratings } from "@/components/NotificationModal";

const page = () => {
  return (
    <div className="text-gray-700 px-5 pb-[90px]">
      <h3 className="font-semibold text-center text-lg">Notifications</h3>
      <hr />
      <section className="mt-3">
        <article className="bg-gray-100 p-3 my-3 text-xs sm:text-sm rounded-lg shadow">
          Your account has been activated!
        </article>

        <article className="bg-gray-100 p-3 my-3 text-xs sm:text-sm rounded-lg shadow">
          <Ratings />
        </article>
      </section>
    </div>
  );
};

export default page;
