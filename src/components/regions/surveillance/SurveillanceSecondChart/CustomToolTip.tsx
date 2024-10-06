const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const amount = payload[0].value;
    return (
      <div className="custom-tooltip bg-white border border-none p-4 mb-20 shadow-xl flex flex-col gap-4 w-[300px] rounded-[12px]">
        <div className="flex justify-between ">
          <p className="text-[#A0A0A0] w-[100px]">Date</p>
          <p className="text-[#5A5A5A]">May-2024</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-[#A0A0A0] w-[100px]">Amount</p>
          <p className="text-[#5A5A5A] ">{amount} </p>
        </div>

        <div className="flex justify-between ">
          <p className="text-[#A0A0A0] w-[100px]">Quarter</p>
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
