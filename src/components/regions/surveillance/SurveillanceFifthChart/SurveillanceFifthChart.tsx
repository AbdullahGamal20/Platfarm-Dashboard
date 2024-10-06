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
  { region: "Al Ain", workOrders: 2000, infestations: 30000 },
  { region: "Al Ain2", workOrders: 1500, infestations: 20000 },
  { region: "Al Anar", workOrders: 2500, infestations: 27000 },
  { region: "Fudala", workOrders: 2700, infestations: 22000 },
  { region: "Wadir", workOrders: 2900, infestations: 18000 },
  { region: "Khobar", workOrders: 3100, infestations: 25000 },
];

const chartConfig = {
  workOrders: { label: "Work Orders", color: "#faeab8" },
  infestations: { label: "Infestation", color: "#cfb563" },
};

// Formatter for Y-axis ticks
const formatYAxisTick = (tick) => {
  if (tick >= 1000) {
    return `${(tick / 1000).toFixed(0)}k`;
  }
  return tick;
};

const SurveillanceFifthChart = () => {
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
        <p className="mb-6  font-bold text-xl text-[#464a46]">
          Pest Surveillance Work Orders and Palms Infestations by Region
        </p>
      </div>

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
          <p className="mb-6 px-1 font-bold">Work Order</p>
          <p className="mb-6 px-2 font-bold">Infestation</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
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
              tickMargin={20}
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
              dataKey="workOrders"
              fill={chartConfig.workOrders.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />

            {/* Palms Bar linked to right Y-axis */}
            <Bar
              yAxisId="right"
              dataKey="infestations"
              fill={chartConfig.infestations.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <button
        onClick={scrollRight}
        disabled={startIndex + 4 >= chartData.length} // Disable the button if we're at the end
        className={`absolute right-[90px] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
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
            <p>Pest Surveillance Work Orders</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Palm Infestation</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default SurveillanceFifthChart;
