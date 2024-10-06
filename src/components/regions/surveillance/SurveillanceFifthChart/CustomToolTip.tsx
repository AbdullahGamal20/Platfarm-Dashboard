const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Extract the values for work orders and infestations from the payload
    const workOrders = payload.find((p) => p.dataKey === "workOrders")?.value;
    const infestations = payload.find(
      (p) => p.dataKey === "infestations"
    )?.value;

    return (
      <div className="custom-tooltip bg-white border border-none p-4 shadow-xl flex flex-col gap-4 w-[300px] rounded-[12px]">
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Date</p>
          <p className="text-[#5A5A5A]">May-2024</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">No. Of Work Orders</p>
          <p className="text-[#5A5A5A]">{workOrders || 0} Work Orders</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">No. Of Infestations</p>
          <p className="text-[#5A5A5A]">
            {infestations > 10000
              ? (infestations / 1000).toFixed(0) + "K"
              : infestations || 0}{" "}
            Infestations
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Region</p>
          <p className="text-[#5A5A5A]">{label}</p>
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
