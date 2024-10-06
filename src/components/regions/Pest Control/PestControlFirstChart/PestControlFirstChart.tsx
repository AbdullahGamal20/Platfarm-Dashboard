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

// Sample Data for Chart
const chartData = [
  { region: "Al Ain", pestControl: 2000, treatedPalms: 30000 },
  { region: "Al Ain2", pestControl: 1500, treatedPalms: 20000 },
  { region: "Al Anar", pestControl: 2500, treatedPalms: 27000 },
  { region: "Fudala", pestControl: 2700, treatedPalms: 22000 },
  { region: "Wadir", pestControl: 2900, treatedPalms: 18000 },
  { region: "Khobar", pestControl: 3100, treatedPalms: 25000 },
];

const chartConfig = {
  pestControl: { label: "Pest Control", color: "#FAEAB8" },
  treatedPalms: { label: "Treated Palms", color: "#cfb563" },
};

// Formatter for Y-axis ticks
const formatYAxisTick = (tick) => {
  if (tick >= 1000) {
    return `${(tick / 1000).toFixed(0)}k`;
  }
  return tick;
};

const PestControlFirstChart = () => {
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
      <div className="flex items-center justify-between">
        {/* Left Side Title */}
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Pest Control And Treated Palms Per Regions
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

      <button
        onClick={scrollLeft}
        disabled={startIndex === 0} // Disable the button if we're at the start
        className={`absolute left-[10%] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft className="w-4 h-4 text-greenColor" />
      </button>
      {/* Chart Rendering */}
      <CardContent className="mt-10">
        <div className="flex items-center justify-between">
          <p className="mb-6  font-bold">Pest Control </p>
          <p className="mb-6  font-bold">Treated Palms</p>
        </div>
        <ResponsiveContainer width="95%" height={300} className={"mx-auto"}>
          <BarChart
            data={visibleData}
            barCategoryGap="25%"
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
            <Tooltip cursor={{ fill: "rgba(200,200,200,0.1)" }} />

            {/* Farms Bar linked to left Y-axis */}
            <Bar
              yAxisId="left"
              dataKey="pestControl"
              fill={chartConfig.pestControl.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />

            {/* Palms Bar linked to right Y-axis */}
            <Bar
              yAxisId="right"
              dataKey="treatedPalms"
              fill={chartConfig.treatedPalms.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <button
        onClick={scrollRight}
        disabled={startIndex + 4 >= chartData.length} // Disable the button if we're at the end
        className={`absolute right-[130px] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
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
            <p>Pest Control </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Treated Palms</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default PestControlFirstChart;
