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

// Sample Data for Chart
const chartData = [
  {
    region: "Al Ain",
    compost: 40,
    animalFodder: 30,
  },
  {
    region: "Al Ola",
    compost: 45,
    animalFodder: 25,
  },
  {
    region: "Al Anar",
    compost: 50,
    animalFodder: 20,
  },
];

// Colors Configurations for the chart bars
const chartConfig = {
  compost: { label: "Compost", color: "#faeab8" },
  animalFodder: { label: "Animal Fodder", color: "#eed790" },
};

const formatYAxisTick = (tick) => {
  return `${tick} Ton`;
};

const tooltipFormatter = (value, name, props) => {
  if (name === "compost") {
    return [value, "Compost"];
  } else if (name === "animalFodder") {
    return [value, "Animal Fodder"];
  }
  return [value, name];
};

export default function RecyclingStockPilesProductionChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true once the component is mounted on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Avoid rendering the chart during SSR to prevent hydration mismatch
    return null;
  }

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none  ">
      <div className="">
        {/* Left Side Title */}
        <p className="  p-6 font-bold text-xl text-[#464a46]">
          Stockpiles Production
        </p>

        {/* Dropdown for Regions */}
      </div>
      <CardContent className="mt-6">
        <p className="mb-6 px-2 font-bold">Amount</p>
        {/* Container for the BarChart */}
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={chartData}
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
              tickFormatter={formatYAxisTick}
            />

            {/* Tooltip on hover */}
            <Tooltip
              cursor={{ fill: "rgba(200,200,200,0.1)" }}
              formatter={tooltipFormatter}
            />

            {/* Bar Representation */}
            <Bar
              dataKey="compost"
              fill={chartConfig.compost.color}
              radius={[10, 10, 0, 0]}
            />

            <Bar
              dataKey="animalFodder"
              fill={chartConfig.animalFodder.color}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <CardDescription className="text-center text-muted text-sm mt-2">
        <div className="flex flex-row justify-center gap-8 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full "></span>
            <p>Compost</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-secondYellow rounded-full "></span>
            <p>Animal Fodder</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
}
