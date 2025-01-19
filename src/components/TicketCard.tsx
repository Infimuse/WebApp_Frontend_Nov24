import { SetStateAction } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

interface Props {
  ticket: {
    quantity: number;
    name: string;
    price: number;
    admits: number;
    description: string;
  };
  setTickets: React.Dispatch<
    SetStateAction<
      {
        quantity: number;
        name: string;
        price: number;
        admits: number;
        description: string;
      }[]
    >
  >;
}
export default function TicketCard(props: Props) {
  const handleAdd = () => {
    props.setTickets((prevTickets) => {
      return prevTickets.map((ticket) => {
        if (ticket.name === props.ticket.name) {
          return { ...ticket, quantity: ticket.quantity + 1 };
        }
        return ticket;
      });
    });
  };

  const handleRemove = () => {
    props.setTickets((prevTickets) => {
      return prevTickets.map((ticket) => {
        if (ticket.name === props.ticket.name) {
          return {
            ...ticket,
            quantity: Math.max(0, ticket.quantity - 1),
          };
        }
        return ticket;
      });
    });
  };

  return (
    <div
      className={`p-4 ${
        props.ticket.quantity > 0
          ? "text-[#BB2460] border-[#BB2460]"
          : "text-gray-600"
      } border shadow-md rounded-md relative`}
    >
      <div>
        <CiCircleInfo
          title={props.ticket.description}
          className="absolute text-blue-600 top-1 right-2"
        />
        <h3 className="font-semibold text-center mb-2">{props.ticket.name}</h3>
      </div>
      <div className="text-center text-xs">Admits {props.ticket.admits}</div>
      <div>
        <hr />
      </div>
      <div>
        <h6 className="my-3 text-lg font-thin text-center">
          KES {props.ticket.price}
        </h6>
      </div>
      <div className="flex justify-center gap-3 items-center">
        <span onClick={handleRemove} className="cursor-pointer">
          <FaMinusCircle
            size={18}
            className={`${
              props.ticket.quantity > 0 ? "text-[#BB2460]" : "text-gray-500"
            }`}
          />
        </span>
        <span>{props.ticket.quantity}</span>

        <span onClick={handleAdd} className="cursor-pointer">
          <FaPlusCircle
            size={18}
            className={`${
              props.ticket.quantity > 0 ? "text-[#BB2460]" : "text-gray-500"
            }`}
          />
        </span>
      </div>
    </div>
  );
}

export interface Ticket {
  name: string;
  price: number;
  admits: number;
  description: string;
}

export const tickets: Ticket[] = [
  {
    name: "General Admission",
    price: 20,
    admits: 1,
    description: "Basic access to the event, including general seating.",
  },
  {
    name: "VIP Admission",
    price: 50,
    admits: 1,
    description:
      "VIP access with front-row seating, complimentary drinks, and snacks.",
  },
  {
    name: "Family Pass",
    price: 80,
    admits: 4,
    description:
      "Includes access for a family of four. Enjoy group seating and additional perks.",
  },
  {
    name: "Student Ticket",
    price: 15,
    admits: 1,
    description:
      "Discounted ticket for students. Must present valid student ID at entry.",
  },
  {
    name: "Early Bird Special",
    price: 18,
    admits: 1,
    description:
      "Discounted price for early purchasers. Available for a limited time only.",
  },
];
