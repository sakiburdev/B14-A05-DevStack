import React from "react";
import { IoClose } from "react-icons/io5";

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-22">

      <h2 className="text-[16px] font-bold text-[#0F172A] mb-1">Your Stack</h2>

      <p className="text-[12px] font-normal text-[#94A3B8] mb-6">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-[#E2E8F0] rounded-xl p-8 font-normal text-center text-[12px] text-[#94A3B8]">
          Your stack is empty.
        </div>
      ) : (

        <div className="space-y-3 mb-6">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />

                <div>
                  <h4 className="font-bold text-[#0F172A] text-[10px] leading-tight">
                    {item.name}
                  </h4>

                  <span className="text-[6px] font-bold text-[#94A3B8]">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-red-200 text-[#D82C20] font-semibold text-[14px] font-inter hover:bg-red-50 transition-colors cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
}