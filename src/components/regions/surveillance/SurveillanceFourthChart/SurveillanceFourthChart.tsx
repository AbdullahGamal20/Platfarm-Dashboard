import React, { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  YAxis,
  Tooltip,
  XAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import CustomTooltip from "./CustomToolTip";

// Sample Data for Chart
const chartData = [
  {
    region: "Palm weevil",
    Pheromone: 5000,
    Delta: 15000,
    Light: 10000,
    total: 40000,
  },
  {
    region: "Leg Borer",
    Pheromone: 4000,
    Delta: 12000,
    Light: 8000,
    total: 40000,
  },
  {
    region: "Dust spider",
    Pheromone: 3000,
    Delta: 10000,
    Light: 6000,
    total: 30000,
  },
  {
    region: "Al-Humayra",
    Pheromone: 1000,
    Delta: 3000,
    Light: 2000,
    total: 10000,
  },
];

const chartConfig = {
  Pheromone: { label: "Severe", color: "#cfb563" },
  Delta: { label: "Medium", color: "#eed790" },
  Light: { label: "Lite", color: "#faeab8" },
};

const SurveillanceFourthChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none">
      <div className="flex items-center justify-between p-6">
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Traps Management in Each Region
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

      <CardContent className="mt-0 pb-0">
        <div className="custom-scroll-area">
          <ResponsiveContainer
            width="100%"
            height={chartData.length * 75 + 50}
            className={""}
          >
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 120, bottom: 10, left: 5 }}
              barCategoryGap="25%"
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <YAxis
                dataKey="region"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={25}
                width={120}
              />
              <XAxis type="number" tick={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(200,200,200,0.1)" }}
                content={<CustomTooltip />}
              />
              <Bar
                dataKey="Pheromone"
                fill={chartConfig.Pheromone.color}
                stackId="a"
                barSize={35}
              />
              <Bar
                dataKey="Delta"
                fill={chartConfig.Delta.color}
                stackId="a"
                barSize={35}
              />

              {/* Unclassified Bar with rounded corners */}
              <Bar
                dataKey="Light"
                fill={chartConfig.Light.color}
                stackId="a"
                radius={[0, 8, 8, 0]}
                barSize={35}
              >
                <LabelList
                  dataKey="total"
                  position="right"
                  offset={15}
                  className="fill-foreground"
                  width={140}
                  fontSize={12}
                  formatter={(value) => `${value} Traps`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardDescription>
        <div className="flex flex-row justify-center gap-8 my-4 h-[30px]">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full"></span>
            <p>Light</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-secondYellow rounded-full"></span>
            <p>Delta</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Pheromone</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default SurveillanceFourthChart;
