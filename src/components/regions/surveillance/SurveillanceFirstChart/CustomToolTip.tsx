const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const farmsData = payload[0]?.value || 0; // Check if payload[0] exists
    const palmsData = payload[1]?.value || 0; // Check if payload[1] exists
    const region = payload[0]?.payload?.region || "Unknown"; // Fallback in case region is missing

    return (
      <div className="custom-tooltip bg-white border border-none p-4 mb-20 shadow-xl flex flex-col gap-4 w-[300px] rounded-[12px]">
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Date</p>
          <p className="text-[#5A5A5A]">May-2024</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">No. Of Palms</p>
          <p className="text-[#5A5A5A] ">{palmsData} Palms</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">No. Of Farms</p>
          <p className="text-[#5A5A5A] ">{farmsData} Farms</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Region</p>
          <p className="text-[#5A5A5A]">{region}</p>
        </div>
        <button className="mt-4 mx-auto bg-greenColor w-[200px] text-white font-bold px-2 py-2 rounded-[12px]">
          View All Work Orders
        </button>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
