const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Extracting values for different traps
    const lightTraps = payload.find((p) => p.dataKey === "Light")?.value;
    const deltaTraps = payload.find((p) => p.dataKey === "Delta")?.value;
    const pheromoneTraps = payload.find(
      (p) => p.dataKey === "Pheromone"
    )?.value;

    return (
      <div className="custom-tooltip bg-white border border-none p-4 mb-20 shadow-xl flex flex-col gap-4 w-[300px] rounded-[12px]">
        {/* Display Date */}
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Date</p>
          <p className="text-[#5A5A5A]">May-2024</p>
        </div>

        {/* Display Traps */}
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Light Traps</p>
          <p className="text-[#5A5A5A]">{lightTraps} Traps</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Delta Traps</p>
          <p className="text-[#5A5A5A]">{deltaTraps} Traps</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Pheromone Traps</p>
          <p className="text-[#5A5A5A]">{pheromoneTraps} Traps</p>
        </div>

        {/* Display Quarter */}
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Region</p>
          <p className="text-[#5A5A5A]">{label}</p>
        </div>

        {/* Button */}
        <button className="mt-4 mx-auto bg-greenColor w-[200px] text-white font-bold px-2 py-2 rounded-[12px]">
          View All Work Orders
        </button>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
