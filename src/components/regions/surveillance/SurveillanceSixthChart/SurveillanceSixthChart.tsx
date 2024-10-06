import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomTooltip from "./CustomToolTip";

const quarterlyData = [
  { quarter: "Quarter 1", amount: 30000 },
  { quarter: "Quarter 2", amount: 80000 },
  { quarter: "Quarter 3", amount: 12000 },
  { quarter: "Quarter 4", amount: 25000 },
  { quarter: "Quarter 5", amount: 40000 },
  { quarter: "Quarter 6", amount: 60000 },
  { quarter: "Quarter 7", amount: 22000 },
  { quarter: "Quarter 8", amount: 28000 },
];

const monthlyData = [
  { month: "Month 1", amount: 1500 },
  { month: "Month 2", amount: 7000 },
  { month: "Month 3", amount: 9000 },
  { month: "Month 4", amount: 8000 },
  { month: "Month 5", amount: 1500 },
  { month: "Month 6", amount: 7000 },
  { month: "Month 7", amount: 9000 },
  { month: "Month 8", amount: 8000 },
];

const weeklyData = [
  { week: "Week 1", amount: 500 },
  { week: "Week 2", amount: 4000 },
  { week: "Week 3", amount: 8000 },
  { week: "Week 4", amount: 6000 },
  { week: "Week 5", amount: 500 },
  { week: "Week 6", amount: 4000 },
  { week: "Week 7", amount: 8000 },
  { week: "Week 8", amount: 6000 },
];

const SurveillanceSixthChart = () => {
  const [selectedData, setSelectedData] = useState(quarterlyData);
  const [startIndex, setStartIndex] = useState(0); // To keep track of the starting index of the visible data

  const handleTabChange = (value) => {
    if (value === "quarterly") {
      setSelectedData(quarterlyData);
      setStartIndex(0); // Reset index on tab change
    } else if (value === "monthly") {
      setSelectedData(monthlyData);
      setStartIndex(0); // Reset index on tab change
    } else if (value === "weekly") {
      setSelectedData(weeklyData);
      setStartIndex(0); // Reset index on tab change
    }
  };

  const visibleData = selectedData.slice(startIndex, startIndex + 4); // Show only 4 data points

  const scrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 4);
    }
  };

  const scrollRight = () => {
    if (startIndex + 4 < selectedData.length) {
      setStartIndex((prevIndex) => prevIndex + 4);
    }
  };

  // Determine the dataKey for the X-axis based on the selected data
  const xAxisKey = selectedData[0].quarter
    ? "quarter"
    : selectedData[0].month
    ? "month"
    : "week";

  return (
    <Card className="w-full bg-transparent outline-none border-none shadow-none relative">
      <div className="flex items-center justify-between p-6">
        <p className="mb-6 px-2 font-bold text-xl text-[#464a46]">
          Treated Palms Over Time
        </p>
        <div className="flex flex-row items-center gap-6 ">
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
          <div className="w-[200px]">
            <select className="bg-primaryBackground text-[#464a46] rounded-[8px] p-2 w-full border-primaryBackground focus:outline-none">
              <option value="All Regions">All Regions</option>
              <option value="Region1">Region 1</option>
              <option value="Region2">Region 2</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={scrollLeft}
        disabled={startIndex === 0}
        className={`absolute left-[10%] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft className="w-4 h-4 text-greenColor" />
      </button>

      <CardContent className="w-full h-[310px]">
        <ChartContainer
          config={visibleData}
          className="h-[280px] w-full mt-2 px-4"
        >
          <h2 className="font-bold">Amount</h2>

          <AreaChart
            data={visibleData}
            margin={{
              top: 20,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFC300" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFC300" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            {/* Cartesian Grid for Horizontal Lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />

            {/* X Axis */}
            <XAxis
              dataKey={xAxisKey} // Dynamic key based on selected data
              tickLine={false}
              axisLine={false}
              tickMargin={15}
            />
            {/* Y Axis to Measure the Amounts */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={15}
              tickCount={4}
              tickFormatter={(value) =>
                value >= 10000 ? `${value / 1000}k` : value
              }
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Area for Chart with Dashed Stroke */}
            <Area
              dataKey="amount"
              type="monotone"
              stroke="#FFC300"
              fill="url(#colorAmount)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <button
        onClick={scrollRight}
        disabled={startIndex + 4 >= selectedData.length}
        className={`absolute right-[5px] top-[50%] transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md ${
          startIndex + 4 >= selectedData.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <FaChevronRight className="w-4 h-4 text-greenColor" />
      </button>
    </Card>
  );
};

export default SurveillanceSixthChart;
