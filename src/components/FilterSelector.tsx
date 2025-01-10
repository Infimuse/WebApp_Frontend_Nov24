import { useState } from "react";

interface Props {
  title: string;
  sides: {
    id: number;
    name: string;
  }[];
}

export default function FilterSelector({ title, sides }: Props) {
  const [selectedSide, setSelectedSide] = useState(1);

  return (
    <fieldset className="mb-2 border-b">
      <legend className="text-sm font-bold text-gray-900">{title}</legend>
      <div className="mt-4  divide-gray-200  border-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-2">
            <div className="min-w-0 flex-1 text-xs">
              <label
                htmlFor={`side-${side.id}`}
                className="select-none font-medium text-gray-700"
              >
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-5 items-center">
              <button
                id={`side-${side.id}`}
                type="button"
                onClick={() => setSelectedSide(side.id as number)}
                className={`h-5 w-5 flex items-center justify-center rounded-full border ${
                  selectedSide === side.id
                    ? "bg-[#BB2460] text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedSide === side.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
