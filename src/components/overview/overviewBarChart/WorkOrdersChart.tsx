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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Quarterly Data
const quarterlyData = [
  {
    quarter: "Quarter 1",
    surveillance: 2000,
    pestControl: 1500,
    recycling: 1000,
  },
  {
    quarter: "Quarter 2",
    surveillance: 2500,
    pestControl: 1200,
    recycling: 800,
  },
  {
    quarter: "Quarter 3",
    surveillance: 2700,
    pestControl: 2000,
    recycling: 900,
  },
  {
    quarter: "Quarter 4",
    surveillance: 2900,
    pestControl: 2200,
    recycling: 1200,
  },
  {
    quarter: "Quarter 5",
    surveillance: 3000,
    pestControl: 1800,
    recycling: 1100,
  },
  {
    quarter: "Quarter 6",
    surveillance: 3200,
    pestControl: 1900,
    recycling: 1000,
  },
  {
    quarter: "Quarter 7",
    surveillance: 3200,
    pestControl: 1900,
    recycling: 1000,
  },
  {
    quarter: "Quarter 8",
    surveillance: 3200,
    pestControl: 1900,
    recycling: 1000,
  },
];

// Monthly Data (Sample)
const monthlyData = [
  { month: "January", surveillance: 1000, pestControl: 800, recycling: 600 },
  { month: "February", surveillance: 1100, pestControl: 900, recycling: 650 },
  { month: "March", surveillance: 1100, pestControl: 900, recycling: 650 },
  { month: "April", surveillance: 1100, pestControl: 900, recycling: 650 },
  { month: "May", surveillance: 1100, pestControl: 900, recycling: 650 },
  { month: "June", surveillance: 1100, pestControl: 900, recycling: 650 },
  { month: "July", surveillance: 1100, pestControl: 900, recycling: 650 },
];

// Weekly Data (Sample)
const weeklyData = [
  { week: "Week 1", surveillance: 200, pestControl: 150, recycling: 100 },
  { week: "Week 2", surveillance: 250, pestControl: 180, recycling: 120 },
  { week: "Week 3", surveillance: 300, pestControl: 200, recycling: 150 },
  { week: "Week 4", surveillance: 350, pestControl: 220, recycling: 180 },
];

// Colors Configurations for the chart bars
const chartConfig = {
  surveillance: { label: "Surveillance", color: "#FAEAB8" },
  pestControl: { label: "Pest Control", color: "#EED790" },
  recycling: { label: "Recycling", color: "#CEB563" },
};

export default function OverviewBarChart() {
  const [isClient, setIsClient] = useState(false);
  const [visibleData, setVisibleData] = useState(quarterlyData.slice(0, 4)); // Default to quarterly data
  const [startIndex, setStartIndex] = useState(0); // Keep track of the starting index
  const [tab, setTab] = useState("quarterly"); // Track the selected tab

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle left scroll
  const scrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 4);
      const newStartIndex = startIndex - 4;
      switch (tab) {
        case "monthly":
          setVisibleData(monthlyData.slice(newStartIndex, newStartIndex + 4));
          break;
        case "weekly":
          setVisibleData(weeklyData.slice(newStartIndex, newStartIndex + 4));
          break;
        default:
          setVisibleData(quarterlyData.slice(newStartIndex, newStartIndex + 4));
      }
    }
  };

  // Handle right scroll
  const scrollRight = () => {
    const dataLength =
      tab === "monthly"
        ? monthlyData.length
        : tab === "weekly"
        ? weeklyData.length
        : quarterlyData.length;

    if (startIndex + 4 < dataLength) {
      setStartIndex((prevIndex) => prevIndex + 4);
      const newStartIndex = startIndex + 4;
      switch (tab) {
        case "monthly":
          setVisibleData(monthlyData.slice(newStartIndex, newStartIndex + 4));
          break;
        case "weekly":
          setVisibleData(weeklyData.slice(newStartIndex, newStartIndex + 4));
          break;
        default:
          setVisibleData(quarterlyData.slice(newStartIndex, newStartIndex + 4));
      }
    }
  };

  // Handle Tab Change
  const handleTabChange = (value) => {
    setTab(value);
    setStartIndex(0); // Reset index when tab changes
    switch (value) {
      case "monthly":
        setVisibleData(monthlyData.slice(0, 4));
        break;
      case "weekly":
        setVisibleData(weeklyData.slice(0, 4));
        break;
      default:
        setVisibleData(quarterlyData.slice(0, 4));
    }
  };
  if (!isClient) {
    return null;
  }

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none  relative">
      <div className="flex items-center justify-between ">
        <div className="flex justify-between items-center gap-6  p-6">
          <h1 className="text-[#464a46] font-bold text-xl mr-8">
            Work Orders Over Time
          </h1>

          <div className="flex flex-row gap-6 items-center ml-24">
            {/* Tabs for Time Selection */}
            <div className="">
              <Tabs defaultValue="quarterly" onValueChange={handleTabChange}>
                {/* Tabs Navigation */}
                <TabsList className="flex p-0 rounded-[12px] text-[#464a46] bg-primaryBackground w-[300px]">
                  <TabsTrigger
                    value="quarterly"
                    className="px-4 pt-3 pb-2 w-full font-medium rounded-[8px] data-[state=active]:bg-greenColor data-[state=active]:rounded-tr-none data-[state=active]:rounded-br-none data-[state=active]:text-white"
                  >
                    Quarterly
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    className="px-4 pt-3 pb-2 w-full font-medium rounded-[8px] data-[state=active]:bg-greenColor data-[state=active]:rounded-none data-[state=active]:text-white"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="weekly"
                    className="px-4 pt-3 pb-2 w-full font-medium rounded-[8px] data-[state=active]:bg-greenColor data-[state=active]:rounded-tl-none data-[state=active]:rounded-bl-none data-[state=active]:text-white"
                  >
                    Weekly
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <div className="w-[200px] ">
                <select className="bg-primaryBackground w-full outline-none text-[#464a46] border-primaryBackground rounded-[8px] p-2 ">
                  <option
                    value="All Streams"
                    className="bg-white"
                    disabled
                    selected
                  >
                    All Streams
                  </option>
                  <option value="Stream 1 " className="bg-white">
                    Surveillance
                  </option>
                  <option value="Stream 2" className="bg-white">
                    Pest Control
                  </option>
                  <option value="Stream 2" className="bg-white">
                    Recycling
                  </option>
                </select>
              </div>

              {/* Select Options for Regions */}
              <div className="w-[200px]">
                <select className="bg-primaryBackground w-full outline-none text-[#464a46] border-primaryBackground rounded-[8px] p-2 ">
                  <option
                    value="All Regions"
                    className="bg-white"
                    disabled
                    selected
                  >
                    Region 1
                  </option>
                  <option value="Stream 1 " className="bg-white">
                    Region 2
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollLeft}
        disabled={startIndex === 0}
        className={`absolute left-[8%] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft className="w-4 h-4 text-greenColor" />
      </button>

      <CardContent className="relative mt-10">
        <p className="mb-6 pl-1 font-bold">Work Orders</p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={visibleData}
            barCategoryGap="28%"
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} />
            <XAxis
              dataKey={
                tab === "quarterly"
                  ? "quarter"
                  : tab === "monthly"
                  ? "month"
                  : "week"
              }
              axisLine={false}
              tickLine={false}
              tickMargin={15}
            />
            <YAxis
              tickCount={4}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{ fill: "rgba(200,200,200,0.1)" }} />
            <Bar
              dataKey="surveillance"
              fill={chartConfig.surveillance.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
            <Bar
              dataKey="pestControl"
              fill={chartConfig.pestControl.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
            <Bar
              dataKey="recycling"
              fill={chartConfig.recycling.color}
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <button
        onClick={scrollRight}
        disabled={
          startIndex + 4 >=
          (tab === "monthly"
            ? monthlyData.length
            : tab === "weekly"
            ? weeklyData.length
            : quarterlyData.length)
        }
        className={`absolute right-[8%] top-[50%] transform -translate-y-1/2 z-10 ${
          startIndex + 4 >=
          (tab === "monthly"
            ? monthlyData.length
            : tab === "weekly"
            ? weeklyData.length
            : quarterlyData.length)
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
            <p>Surveillance</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-secondYellow rounded-full "></span>
            <p>Pest Control</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-darkYellow rounded-full "></span>
            <p>Recycling</p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
}
