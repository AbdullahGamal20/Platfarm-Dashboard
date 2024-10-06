import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewBarChart from "./overviewBarChart/WorkOrdersChart";

const Overview = () => {
  return (
    <div className="container mx-auto flex flex-col justify-start items-center">
      {/* Header Section */}
      <div className="w-[1200px] flex flex-row justify-between items-center">
        <h1 className="my-6 font-bold text-lg text-[#464a46]">Overview</h1>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-[#464a46]">Show data in:</h3>
          <select className="bg-[#f1f1f1] w-[200px] outline-none rounded-[8px] p-2 text-[#464a46]">
            <option value="All Streams" disabled selected>
              Last Year
            </option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
        </div>
      </div>

      {/* Main Chart Section */}

      {/* Charts */}

      <div className="w-[1200px] h-[550px] overflow-hidden bg-white mx-auto rounded-[8px]  shadow-md">
        <OverviewBarChart />
      </div>
    </div>
  );
};

export default Overview;
