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
    region: "Al-Hijr Region",
    severe: 5000,
    medium: 15000,
    lite: 10000,
    unclassified: 10000,
    total: 40000,
  },
  {
    region: "Al-Hijr Region",
    severe: 4000,
    medium: 12000,
    lite: 8000,
    unclassified: 16000,
    total: 40000,
  },
  {
    region: "Al-Hijr Region",
    severe: 3000,
    medium: 10000,
    lite: 6000,
    unclassified: 11000,
    total: 30000,
  },
  {
    region: "Al-Hijr Region",
    severe: 1000,
    medium: 3000,
    lite: 2000,
    unclassified: 4000,
    total: 10000,
  },
  {
    region: "Al-Hijr Region",
    severe: 5000,
    medium: 15000,
    lite: 10000,
    unclassified: 10000,
    total: 40000,
  },
  {
    region: "Al-Hijr Region",
    severe: 4000,
    medium: 12000,
    lite: 8000,
    unclassified: 16000,
    total: 40000,
  },
  {
    region: "Al-Hijr Region",
    severe: 3000,
    medium: 10000,
    lite: 6000,
    unclassified: 11000,
    total: 30000,
  },
  {
    region: "Al-Hijr Region",
    severe: 1000,
    medium: 3000,
    lite: 2000,
    unclassified: 4000,
    total: 10000,
  },
];

const chartConfig = {
  severe: { label: "Severe", color: "#cfb563" },
  medium: { label: "Medium", color: "#eed790" },
  lite: { label: "Lite", color: "#faeab8" },
  unclassified: { label: "Unclassified", color: "#fff5d8" },
};

const SurveillanceEightthChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none">
      <div className="flex items-center justify-between p-6">
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Infested Palms Per Region
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

      <CardContent className="mt-2 pb-0">
        <div className="custom-scroll-area">
          <ResponsiveContainer
            width="95%"
            height={chartData.length * 75 + 50}
            className={"pl-0"}
          >
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 120, bottom: 10, left: 0 }}
              barCategoryGap="25%"
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <YAxis
                dataKey="region"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={25}
                width={140}
              />
              <XAxis type="number" tick={false} axisLine={false} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(200,200,200,0.1)" }}
              />
              <Bar
                dataKey="severe"
                fill={chartConfig.severe.color}
                stackId="a"
                barSize={35}
              />
              <Bar
                dataKey="medium"
                fill={chartConfig.medium.color}
                stackId="a"
                barSize={35}
              />
              <Bar
                dataKey="lite"
                fill={chartConfig.lite.color}
                stackId="a"
                barSize={35}
              />
              {/* Unclassified Bar with rounded corners */}
              <Bar
                dataKey="unclassified"
                fill={chartConfig.unclassified.color}
                stackId="a"
                radius={[0, 8, 8, 0]}
                barSize={35}
              >
                <LabelList
                  dataKey="total"
                  position="right"
                  offset={10}
                  className="fill-foreground"
                  width={180}
                  fontSize={12}
                  formatter={(value) =>
                    `${(value / 1000).toFixed(0)}K Infested Palms`
                  }
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardDescription>
        <div className="flex flex-row justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full"></span>
            <p>Severe</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-secondYellow rounded-full"></span>
            <p>Medium</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-lightYellow rounded-full"></span>
            <p>Lite</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-[#fff5d8] rounded-full"></span>
            <p>Unclassified</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default SurveillanceEightthChart;
