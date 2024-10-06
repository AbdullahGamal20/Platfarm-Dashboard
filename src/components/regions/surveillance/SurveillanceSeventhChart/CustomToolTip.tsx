const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload; // Get the name and value from the payload
    console.log(payload);
    return (
      <div className="custom-tooltip bg-white border border-none p-4 mb-20 shadow-xl flex flex-col gap-4 w-[300px] rounded-[12px]">
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Pest Type</p>
          <p className="text-[#5A5A5A]">{name}</p> {/* Display pest name */}
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Date</p>
          <p className="text-[#5A5A5A]">May-2024</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[120px]">Infested Palms</p>
          <p className="text-[#5A5A5A]">{value}k Palms</p>{" "}
          {/* Display amount */}
        </div>
        <div className="flex justify-between">
          <p className="text-[#A0A0A0] w-[100px]">Severity</p>
          <p className="text-red-800  capitalize font-bold flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-red-800 rounded-[50%]"></span>
            Severe
          </p>
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
