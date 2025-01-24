"use client";
import { QRCode } from "react-qrcode-logo";
const Ticket = () => {
  return (
    <div className="text-gray-700">
      <img
        src="/assets/Communities Background.jpg"
        className="w-full h-[200px]"
      />

      <div className="px-2 mt-2">
        <section className="grid grid-cols-2 gap-3">
          <p className="font-bold ">
            Name:{" "}
            <span className="font-normal text-gray-500">Bowling Classes</span>
          </p>
          <p className="font-bold ">
            Date: <span className="font-normal text-gray-500">22/02/2024</span>
          </p>
          <p className="font-bold ">
            Time: <span className="font-normal text-gray-500">10:00 AM</span>
          </p>
          <p className="font-bold ">
            Location:{" "}
            <span className="font-normal text-gray-500">Bowling Club</span>
          </p>
          <p className="font-bold ">
            Price:{" "}
            <span className="font-normal text-gray-500">KES 1000.00</span>
          </p>
        </section>

        <div className="mt-4 flex items-center justify-center p-3">
          <QRCode
            value="infimuse.com"
            fgColor="#BB2460"
            eyeRadius={[
              // Customize the corner squares to also look circular
              { outer: 10, inner: 5 }, // Top-left corner
              { outer: 10, inner: 5 }, // Top-right corner
              { outer: 10, inner: 5 }, // Bottom-left corner
            ]}
            logoImage="/assets/logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
