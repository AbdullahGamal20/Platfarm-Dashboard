import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RecyclingStockPilesInputChart from "./recycling/recyclingStockPiles/recyclingStockPilesInputChart";
import RecyclingStockPilesProductionChart from "./recycling/recyclingStockPiles/recyclingStockPilesProductionChart";
import RecyclingWastesChart from "./recycling/RecyclingFirstChart/RecyclingFirstChart";
import SurveillanceFirstChart from "./surveillance/SurveillanceFirstChart/SurveillanceFirstChart";
import SurveillanceSecondChart from "./surveillance/SurveillanceSecondChart/SurveillanceSecondChart";
import SurveillanceThirdChart from "./surveillance/SurveillanceThirdChart/SurveillanceThirdChart";
import SurveillanceFourthChart from "./surveillance/SurveillanceFourthChart/SurveillanceFourthChart";
import SurveillanceFifthChart from "./surveillance/SurveillanceFifthChart/SurveillanceFifthChart";
import SurveillanceSixthChart from "./surveillance/SurveillanceSixthChart/SurveillanceSixthChart";
import SurveillanceEightthChart from "./surveillance/SurveillanceEightthChart/SurveillanceEightthChart";
import SurveillanceSeventhChart from "./surveillance/SurveillanceSeventhChart/SurveillanceSeventhChart";
import PestControlFirstChart from "./Pest Control/PestControlFirstChart/PestControlFirstChart";
import PestControlSecondChart from "./Pest Control/PestControlSecondChart/PestControlSecondChart";
import PestControlThirdChart from "./Pest Control/PestControlThirdChart/PestControlThirdChart";
import PestControlFourthChart from "./Pest Control/PestControlFourthChart/PestControlFourthChart";
import RecyclingFirstChart from "./recycling/RecyclingFirstChart/RecyclingFirstChart";

// Dynamically import the PalmsSurveillanceChart to load it only on the client side

const Regions = () => {
  // State to handle hydration
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent server-client mismatch by rendering null until the component is mounted
  if (!mounted) return null;

  return (
    <div className="mt-16 w-[1200px] mx-auto ">
      {/* Tabs for different sections */}
      <Tabs defaultValue="surveillance" className="w-full">
        <TabsList className="flex justify-start my-14 gap-8 w-full text-[#464a46]">
          <TabsTrigger
            value="surveillance"
            className="shadow-none data-[state=active]:border-b-greenColor data-[state=active]:border-b-2 bg-transparent data-[state=active]:text-greenColor data-[state=active]:text-2xl"
          >
            Surveillance
          </TabsTrigger>
          <TabsTrigger
            value="pestControl"
            className="data-[state=active]:border-b-greenColor data-[state=active]:border-b-2 data-[state=active]:text-greenColor data-[state=active]:text-2xl"
          >
            Pest Control
          </TabsTrigger>
          <TabsTrigger
            value="recycling"
            className="data-[state=active]:border-b-greenColor data-[state=active]:border-b-2 data-[state=active]:text-greenColor data-[state=active]:text-2xl"
          >
            Recycling
          </TabsTrigger>
        </TabsList>

        {/* Chart Content for Surveillance */}
        <TabsContent value="surveillance">
          {/* First Chart  */}
          <div className="w-[1200px] h-[550px] overflow-hidden bg-white mx-auto rounded-[8px]  shadow-md">
            <SurveillanceFirstChart />
          </div>

          {/* Second Chart  */}
          <div className="flex flex-row py-2 justify-between items-center h-[450px] gap-12 mt-24 mb-6 rounded-[12px] bg-none border-none outline-none">
            <div className="w-[290px] h-full flex flex-col items-center justify-between gap-[52px] ">
              <div className="flex items-center gap-4 w-full bg-white h-[190px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-bold text-2xl">4000</h2>
                  <span className="text-[#9A9D9A] font-bold text-sm">
                    Total Farms
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full bg-white h-[190px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-bold text-2xl">20M</h2>
                  <span className="text-[#9A9D9A] font-bold text-sm">
                    Total Palms
                  </span>
                </div>
              </div>
            </div>
            <div className=" bg-white shadow-md  rounded-[8px] w-[850px] h-full ">
              <SurveillanceSecondChart />
            </div>
          </div>
          {/* Third Chart  */}
          <div className="w-[1200px] h-[550px] overflow-hidden bg-white mx-auto rounded-[8px] mt-24   shadow-md">
            <SurveillanceThirdChart />
          </div>

          {/* Fourth Chart  */}
          <div className="flex flex-row justify-between items-center h-[440px] gap-12 mt-24 mb-6 rounded-[12px] bg-none border-none outline-none">
            <div className=" bg-white shadow-md rounded-[8px] w-[800px] ">
              <SurveillanceFourthChart />
            </div>
            <div className="w-[380px] flex flex-col items-center justify-between gap-[52px] ">
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col  gap-2">
                    <h2 className="font-bold text-2xl">178k</h2>
                    <span className="text-[#cccecc] w-[120px] text-sm">
                      Light Traps
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center ">
                    <h2 className="font-bold text-2xl">0</h2>
                    <span className="text-[#cccecc] text-sm">Catches</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col  gap-2">
                    <h2 className="font-bold text-2xl">300</h2>
                    <span className="text-[#cccecc] w-[120px] text-sm">
                      Delta Traps
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center ">
                    <h2 className="font-bold text-2xl">23</h2>
                    <span className="text-[#cccecc] text-sm">Catches</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">100</h2>
                    <span className="text-[#cccecc] text-sm w-[120px]">
                      Pheromone Traps
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center ">
                    <h2 className="font-bold text-2xl">50</h2>
                    <span className="text-[#cccecc] text-sm">Catches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Chart  */}
          <div className="w-[1200px] h-[550px] overflow-hidden bg-white mx-auto rounded-[8px] mt-24   shadow-md">
            <SurveillanceFifthChart />
          </div>

          {/* Sixth Chart  */}
          <div className="w-[1200px] h-[450px] overflow-hidden bg-white mx-auto rounded-[8px] mt-24   shadow-md">
            <SurveillanceSixthChart />
          </div>

          {/* Seventh Chart  */}
          <div className="flex flex-row justify-between items-center h-[550px] gap-10 mt-24 mb-6 rounded-[12px] bg-none border-none outline-none">
            <div className=" bg-white shadow-md rounded-[8px] w-[880px] h-full">
              <SurveillanceSeventhChart />
            </div>
            <div className="w-[300px] h-full flex flex-col items-center justify-between gap-[20px] ">
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col ">
                    <h2 className="font-bold text-2xl">
                      178k
                      <span className="text-[12px] text-[#8b8e8b] ml-2">
                        infestions
                      </span>
                    </h2>

                    <span className="text-[#c03934] w-[120px] text-sm font-bold">
                      Severe
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col  ">
                    <h2 className="font-bold text-2xl">
                      1069
                      <span className="text-[12px] text-[#8b8e8b] ml-2">
                        infestions
                      </span>
                    </h2>
                    <span className="text-[#c08020] w-[120px] text-sm">
                      Medium
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col ">
                    <h2 className="font-bold text-2xl">
                      100
                      <span className="text-[12px] text-[#8b8e8b] ml-2">
                        infestions
                      </span>
                    </h2>
                    <span className="text-[#bab640] text-sm w-[120px]">
                      Lite
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full bg-white h-[120px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex flex-col ">
                    <h2 className="font-bold text-2xl">
                      100{" "}
                      <span className="text-[12px] text-[#8b8e8b] ml-2">
                        infestions
                      </span>
                    </h2>
                    <span className="text-[#575b57] text-sm w-[120px]">
                      Unclassified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eightth Chart  */}
          <div className="w-[1200px] h-[480px] overflow-hidden bg-white mx-auto rounded-[8px] mt-24   shadow-md">
            <SurveillanceEightthChart />
          </div>
        </TabsContent>

        {/* Content for Pest Control */}
        <TabsContent value="pestControl">
          {/* Pest Control Components */}

          {/* First Pest Control Chart  */}
          <div className=" h-[550px] bg-white w-[1200px] rounded-[8px] shadow-md p-6 ">
            <PestControlFirstChart />
          </div>

          {/* Second Pest Control Chart  */}

          <div className="mt-20 h-[480px] bg-white w-[1200px] rounded-[8px] shadow-md ">
            <PestControlSecondChart />
          </div>

          {/* Third Pest Control Chart  */}
          <div className="flex flex-row justify-between items-center h-[440px] gap-12 mt-24 mb-6 rounded-[12px] bg-none border-none outline-none">
            <div className=" bg-white shadow-md  rounded-[8px] w-[850px] ">
              <PestControlThirdChart />
            </div>
            <div className="w-[330px] flex flex-col items-center justify-between gap-[52px] ">
              <div className="flex items-center gap-4 w-full bg-white h-[115px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-2xl">178k</h2>
                  <span className="text-[#cccecc] text-sm">
                    Treated Palms by Tablets
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full bg-white h-[115px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-2xl">178k</h2>
                  <span className="text-[#cccecc] text-sm">
                    Treated Palms by Tablets
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full bg-white h-[115px] px-6 rounded-[8px] shadow-md">
                <div className="bg-[#f8f4e8] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                  <span className="">hello</span>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-2xl">178k</h2>
                  <span className="text-[#cccecc] text-sm">
                    Treated Palms by Tablets
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth Pest Control Chart  */}
          <div className="mt-20 h-[450px] bg-white w-[1200px] rounded-[8px] shadow-md ">
            <PestControlFourthChart />
          </div>
        </TabsContent>

        {/* Content for Recycling */}
        <TabsContent
          value="recycling"
          className="flex flex-col items-center bg-transparent border-none justify-center overflow-hidden  mx-auto rounded-[8px] "
        >
          <div className="h-[550px] bg-white w-[1200px] rounded-[8px] shadow-md p-6 ">
            <RecyclingFirstChart />
          </div>
          <div className=" mt-8 h-[550px] w-[1200px] bg-transparent rounded-[8px]  flex flex-row justify-between items-center gap-12 ">
            <div className="bg-white w-full rounded-[8px] ">
              <RecyclingStockPilesInputChart />
            </div>
            <div className="bg-white w-full rounded-[8px] ">
              <RecyclingStockPilesProductionChart />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Regions;
