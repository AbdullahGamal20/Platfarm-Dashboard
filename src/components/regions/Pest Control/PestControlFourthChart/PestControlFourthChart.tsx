import React, { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Sample Data for Chart
const chartData = [
  { Pesticide: "Pesticide 1", total: 25000 },
  { Pesticide: "Pesticide 2", total: 30000 },
  { Pesticide: "Pesticide 3", total: 20000 },
  { Pesticide: "Pesticide 4", total: 15000 },
  { Pesticide: "Pesticide 1", total: 25000 },
  { Pesticide: "Pesticide 2", total: 30000 },
  { Pesticide: "Pesticide 3", total: 20000 },
  { Pesticide: "Pesticide 4", total: 15000 },
  { Pesticide: "Pesticide 1", total: 25000 },
  { Pesticide: "Pesticide 2", total: 30000 },
  { Pesticide: "Pesticide 3", total: 20000 },
  { Pesticide: "Pesticide 4", total: 15000 },
];

const chartConfig = {
  Pesticide: { color: "#ecd280" },
};

const PestControlFourthChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);

  const barHeight = 75; // Each bar will be 75px tall

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none">
      <div className="flex items-center justify-between p-6">
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Usage Count Of Different Pesticides Over Time
        </p>

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

      <CardContent className="mt-2 pb-0 ">
        {/* <ScrollArea className="w-full h-[300px] overflow-y-auto "> */}
        <div className="custom-scroll-area">
          <ResponsiveContainer
            width="100%"
            height={chartData.length * barHeight + 30} // Dynamically calculated height
          >
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 120, bottom: 10, left: 5 }}
              barCategoryGap="25%"
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <YAxis
                dataKey="Pesticide"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={20}
                width={120}
              />
              <XAxis type="number" tick={false} axisLine={false} />

              <Bar
                dataKey="total"
                fill={chartConfig.Pesticide.color}
                stackId="a"
                radius={[0, 8, 8, 0]}
                barSize={35} // Keep the bar size fixed
              >
                <LabelList
                  dataKey="total"
                  position="right"
                  offset={15}
                  className="fill-foreground"
                  width={140}
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* </ScrollArea> */}
      </CardContent>
    </Card>
  );
};

export default PestControlFourthChart;
