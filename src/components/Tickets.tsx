import { useState } from "react";
import TicketCard, { tickets } from "./TicketCard";

const Tickets = () => {
  const [mytickets, setTickets] = useState(
    tickets.map((ticket) => ({
      ...ticket,
      quantity: 0,
    }))
  );
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-3 sm:mb-5">
        <h2 className="text-sm ssm:text-xl font-semibold mb-2 sm:mb-3">
          Ticket Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {mytickets.map((ticket, idx) => (
            <TicketCard ticket={ticket} key={idx} setTickets={setTickets} />
          ))}
        </div>

        <section>
          <h3 className="font-bold my-3  text-lg text-[#BB2460]">Total: {mytickets.reduce((prev, current) => prev + (current.quantity * current.price), 0)} KES</h3>
          <button className="p-2.5 font-semibold rounded-lg w-full bg-[#13baef] text-white hover:scale-95 duration-300">
            Book Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Tickets;
