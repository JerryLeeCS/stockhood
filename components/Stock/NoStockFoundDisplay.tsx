import React from "react";
import { AiOutlineInbox } from "react-icons/ai";

const NoStockFoundDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <AiOutlineInbox size={48} />
      <p className="text-xl font-semibold text-gray-700">No stocks found</p>
      <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
    </div>
  );
};

export default NoStockFoundDisplay;
