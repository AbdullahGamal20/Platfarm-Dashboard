import React, { useEffect, useState } from "react";
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
  { region: "Al Ain", farms: 2000, palms: 30000 },
  { region: "Al Ain2", farms: 1500, palms: 20000 },
  { region: "Al Anar", farms: 2500, palms: 27000 },
  { region: "Fudala", farms: 2700, palms: 22000 },
  { region: "Wadir", farms: 2900, palms: 18000 },
  { region: "Khobar", farms: 3100, palms: 25000 },
  { region: "Ola ", farms: 2900, palms: 18000 },
  { region: "Mecca", farms: 3100, palms: 25000 },
];

const chartConfig = {
  farms: { label: "Farms", color: "#faeab8" },
  palms: { label: "Palms", color: "#cfb563" },
};

// Formatter for Y-axis ticks
const formatYAxisTick = (tick) => {
  if (tick >= 1000) {
    return `${(tick / 1000).toFixed(0)}k`;
  }
  return tick;
};

const SurveillanceFirstChart = () => {
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
    <Card className="w-full bg-transparent outline-none border-none shadow-none relative">
      <div className="flex items-center justify-between p-6">
        {/* Left Side Title */}
        <p className="mb-6 font-bold text-lg text-[#464a46]">
          Farms and Palms Registered Per Regions
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

      {/* Chart Rendering */}
      <CardContent className="mt-10">
        <div className="flex items-center justify-between">
          <p className="mb-6 px-2 font-bold">Farms</p>
          <p className="mb-6 px-2 font-bold">Palms</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={visibleData}
            barCategoryGap={0} // No gap for fixed-width bars
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="region"
              axisLine={false}
              tickLine={false}
              tickMargin={15}
            />
            {/* Left Y-axis for Farms */}
            <YAxis
              yAxisId="left"
              tickCount={4}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
            />
            {/* Right Y-axis for Palms */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickCount={4}
              tickMargin={40}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(200,200,200,0.1)" }}
            />

            {/* Farms Bar linked to left Y-axis */}
            <Bar
              yAxisId="left"
              dataKey="farms"
              fill={chartConfig.farms.color}
              radius={[10, 10, 0, 0]}
              barSize={40} // Fixed width for Farms bars
            />

            {/* Palms Bar linked to right Y-axis */}
            <Bar
              yAxisId="right"
              dataKey="palms"
              fill={chartConfig.palms.color}
              radius={[10, 10, 0, 0]}
              barSize={40} // Fixed width for Palms bars
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <button
        onClick={scrollRight}
        disabled={startIndex + 4 >= chartData.length} // Disable the button if we're at the end
        className={`absolute right-[110px] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex + 4 >= chartData.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <FaChevronRight className="w-4 h-4 text-greenColor" />
      </button>

      <CardDescription>
        <div className="flex flex-row justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full"></span>
            <p>Farms</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Palms</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default SurveillanceFirstChart;
