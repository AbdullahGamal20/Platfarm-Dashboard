import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card"; // Ensure correct imports
import CustomTooltip from "./CustomToolTip";

// Sample Data for Chart (Infested palms by pests)
const chartData = [
  { name: "Red palm weevil", value: 600 },
  { name: "Stem borer", value: 400 },
  { name: "Stalk borer", value: 320 },
  { name: "Date moth", value: 160 },
  { name: "Dust mite", value: 250 },
  { name: "Black scorch", value: 220 },
  { name: "Desert locust", value: 230 },
];

const COLORS = [
  "#95834b",
  "#b49e59",
  "#d3b75f",
  "#E8CC72",
  "#FAE196",
  "#FAEAB8",
  "#FCF3D6",
];

const SurveillanceSeventhChart = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none">
      <div className="flex items-center justify-between p-6">
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Infested Palms By Pests
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
        <div className="flex">
          {/* Left Column: Pest Data */}
          <div className="flex flex-col justify-center w-1/2 pr-8">
            <div className="text-left">
              <ul className="space-y-4">
                <div className="flex justify-between border-b-red border-b-2 pb-2">
                  <li>Pests </li>
                  <li>NO. of Palms</li>
                </div>
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full border-b-red border-b-2 pb-2"
                  >
                    <li className="flex items-center">
                      <span
                        className="w-[15px] h-[15px] rounded-full mr-3"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></span>
                      <span className="text-base text-[#464a46] font-medium">
                        {item.name}
                      </span>
                    </li>
                    <h2 className="mr-12 font-bold">{item.value}k</h2>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Chart */}
          <div className="w-1/2 flex justify-center items-center">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={115}
                  outerRadius={180}
                  fill="#8884d8"
                  paddingAngle={5}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    index,
                  }) => {
                    const radius =
                      innerRadius + (outerRadius - innerRadius) * 0.3;
                    const x =
                      cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y =
                      cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#fff"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                        className="font-bold "
                      >
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      cornerRadius={10}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <svg>
                  <rect
                    x="23%"
                    y="23%"
                    width="54%"
                    height="54%"
                    rx="150" // rounded corners
                    fill="#fff" // white background
                    stroke="#000" // black border
                    strokeWidth="1"
                    strokeDasharray="2,10" // dashed border
                  />

                  <rect
                    x="24%"
                    y="24%"
                    width="52%"
                    height="52%"
                    rx="150" // rounded corners
                    fill="#dfeadd" // background color
                  />
                  <rect
                    x="27%"
                    y="27%"
                    width="46%"
                    height="46%"
                    rx="150" // rounded corners
                    fill="#8EAE86" // background color
                  />

                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-bold text-2xl"
                    fill="#fff"
                  >
                    5.5 M
                  </text>
                  <text
                    x="50%"
                    y="56%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-bold text-lg"
                    fill="#fff"
                  >
                    Total Infested Palms
                  </text>
                </svg>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveillanceSeventhChart;
