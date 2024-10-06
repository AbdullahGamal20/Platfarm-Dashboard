"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomTooltip from "./CustomToolTip";

// Sample Data for Chart
const chartData = [
  {
    region: "Al Ain",
    Light: 2000,
    Delta: 1500,
    Pheromone: 1000,
  },
  {
    region: "Al Arar",
    Light: 2500,
    Delta: 1200,
    Pheromone: 800,
  },
  {
    region: "Fudala",
    Light: 2700,
    Delta: 2000,
    Pheromone: 900,
  },
  {
    region: "Waqir",
    Light: 2900,
    Delta: 2200,
    Pheromone: 1200,
  },
  {
    region: "Khaybar",
    Light: 2000,
    Delta: 1500,
    Pheromone: 1000,
  },
  {
    region: "Ola",
    Light: 2500,
    Delta: 1200,
    Pheromone: 800,
  },
  {
    region: "Mecca",
    Light: 2700,
    Delta: 2000,
    Pheromone: 900,
  },
];

// Colors Configurations for the chart bars
const chartConfig = {
  Light: { label: "Surveillance", color: "#faeab8" },
  Delta: { label: "Pest Control", color: "#eed790" },
  Pheromone: { label: "Recycling", color: "#cfb563" },
};

export default function SurveillanceThirdChart() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [visibleData, setVisibleData] = useState(chartData.slice(0, 4)); // Initially show the first 4 data points
  const [startIndex, setStartIndex] = useState(0); // To keep track of the starting index of the visible data

  useEffect(() => {
    // Example of client-only code
    console.log("Component mounted or updated");
  }, []);
  const scrollLeft = () => {
    // Shift the visible data to the left by 4 items
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 4);
      setVisibleData(chartData.slice(startIndex - 4, startIndex));
    }
  };

  const scrollRight = () => {
    // Shift the visible data to the right by 4 items
    if (startIndex + 4 < chartData.length) {
      setStartIndex((prevIndex) => prevIndex + 4);
      setVisibleData(chartData.slice(startIndex + 4, startIndex + 8));
    }
  };
  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none relative  ">
      <div className="flex items-center justify-between p-6">
        {/* Left Side Title */}
        <p className="mb-6  font-bold text-lg text-[#464a46]">
          Traps Installed Per Region
        </p>

        {/* Dropdown for Regions */}
        <div className="w-[200px]">
          <select
            className="bg-primaryBackground text-[#464a46] rounded-[8px] p-2 w-full border-primaryBackground focus:outline-none"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="All Regions">All Regions</option>
            <option value="Region1">Region 1</option>
            <option value="Region2">Region 2</option>
          </select>
        </div>
      </div>
      <p className="mb-6 px-6 font-bold">Work Orders</p>

      {/* Left Button for scrolling */}
      <button
        onClick={scrollLeft}
        disabled={startIndex === 0} // Disable the button if we're at the start
        className={`absolute left-[8%] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft className="w-4 h-4 text-greenColor" />
      </button>
      <CardContent>
        {/* Container for the BarChart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={visibleData}
            barCategoryGap="28%"
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          >
            {/* Grid Lines */}
            <CartesianGrid strokeDasharray="4 4" vertical={false} />

            {/* X-axis Configuration */}
            <XAxis
              dataKey="region"
              axisLine={false}
              tickLine={false}
              tickMargin={15}
              tickFormatter={(value) => value}
            />

            {/* Y-axis Configuration */}
            <YAxis
              tickCount={4}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip on hover */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(200,200,200,0.1)" }}
            />

            {/* Bar Representation */}
            <Bar
              dataKey="Light"
              fill={chartConfig.Light.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
            <Bar
              dataKey="Delta"
              fill={chartConfig.Delta.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
            <Bar
              dataKey="Pheromone"
              fill={chartConfig.Pheromone.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <button
        onClick={scrollRight}
        disabled={startIndex + 4 >= chartData.length} // Disable the button if we're at the end
        className={`absolute right-[50px] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex + 4 >= chartData.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <FaChevronRight className="w-4 h-4 text-greenColor" />
      </button>
      <CardDescription className="text-center text-muted text-sm mt-2">
        <div className="flex flex-row justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full "></span>
            <p>Light</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-secondYellow rounded-full "></span>
            <p>Delta</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full "></span>
            <p>Pheromone</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
}
