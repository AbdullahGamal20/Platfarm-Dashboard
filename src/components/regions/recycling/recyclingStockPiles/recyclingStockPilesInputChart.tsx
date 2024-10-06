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

// Sample Data for Chart
const chartData = [
  { region: "Al Ain", DeadTrees: 2000, Wastes: 30 },
  { region: "Al Ain2", DeadTrees: 1500, Wastes: 20 },
  { region: "Al Anar", DeadTrees: 2500, Wastes: 27 },
];

const chartConfig = {
  DeadTrees: { label: "Dead Trees", color: "#faeab8" },
  Wastes: { label: "Wastes", color: "#cfb563" },
};

// Formatter for Y-axis ticks
const formatYAxisTick = (tick) => {
  return `${tick} Ton`;
};

const tooltipFormatter = (value, name, props) => {
  if (name === "DeadTrees") {
    return [value, "Dead Trees"];
  } else if (name === "Wastes") {
    return [value, "Wastes"];
  }
  return [value, name];
};

const RecyclingStockPilesInputChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  useEffect(() => {
    // Example of client-only code
    console.log("Component mounted or updated");
  }, []);

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none">
      <div className=" ">
        {/* Left Side Title */}
        <p className=" p-6 font-bold text-xl text-[#464a46]">
          Stockpiles Input
        </p>

        {/* Dropdown for Regions */}
      </div>

      {/* Chart Rendering */}
      <CardContent className="mt-6">
        <div className="flex items-center justify-between">
          <p className="mb-6 ml-2  font-bold">Dead Trees </p>
          <p className="mb-6 mr-2 font-bold">Wastes</p>
        </div>
        <ResponsiveContainer width="100%" height={260} className={"mx-auto"}>
          <BarChart
            data={chartData}
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
              cursor={{ fill: "rgba(200,200,200,0.1)" }}
              formatter={tooltipFormatter}
            />

            {/* Farms Bar linked to left Y-axis */}
            <Bar
              yAxisId="left"
              dataKey="DeadTrees"
              fill={chartConfig.DeadTrees.color}
              radius={[10, 10, 0, 0]}
            />

            {/* Palms Bar linked to right Y-axis */}
            <Bar
              yAxisId="right"
              dataKey="Wastes"
              fill={chartConfig.Wastes.color}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardDescription>
        <div className="flex flex-row justify-center gap-8 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full"></span>
            <p>Dead Trees</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Wastes</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default RecyclingStockPilesInputChart;
