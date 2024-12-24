"use client";

import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function Location() {
  const [distance, setDistance] = useState<number[]>([2, 60]);

  const handleDistanceChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setDistance(value);
    }
  };

  return (
    <div className="location-slider mt-[-18px] mb-4">
      <Slider
        value={distance}
        onChange={handleDistanceChange}
        valueLabelDisplay="auto"
        min={2}
        max={60}
        step={1}
        marks={[
          { value: 2, label: "2 km" },
          { value: 60, label: "60 km" },
        ]}
        sx={{
          "& .MuiSlider-thumb": {
            color: "#bb2460", // Changes the thumb color to red
          },
          "& .MuiSlider-track": {
            color: "#bb2460", // Changes the track color to red
          },
          "& .MuiSlider-rail": {
            color: "#bbb", // Changes the rail color to a lighter grey
          },
        }}
        className=""
      />
      <div className="text-black mt-[-18px] mb-8 text-center">
        {distance[0]} km - {distance[1]} km
      </div>
    </div>
  );
}
