import { useState } from "react";
import { FaStar, FaCheck, FaSpinner } from "react-icons/fa";

const badgeStyles = {
    react: "bg-[#F0F9FF] text-[#0EA5E9] border-[#E0F2FE]",
    vue: "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]",
    svelte: "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]",
    nextjs: "bg-[#f1f5f9] text-[#1e293b] border-[#e2e8f0]",
    nodejs: "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]",
    postgresql: "bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]",
    redis: "bg-[#FEF2F2] text-[#DC2626] border-[#FEE2E2]",
    javascript: "bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]",
    typescript: "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]",
    java: "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]",
    tailwindcss: "bg-[#ECFEFF] text-[#0891B2] border-[#CFFAFE]",
    docker: "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]",
};

const TechnologyCard = ({ tech, isAdded, onAdd }) => {
    const [isLoading, setIsLoading] = useState(false);
    const badgeClass = badgeStyles[tech.id] || "bg-gray-50 text-gray-500 border-gray-100";

    const handleCardAdd = async () => {
        setIsLoading(true);
        await onAdd(tech);
        setIsLoading(false);
    };

    return (
        <div
            className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${isAdded
                ? "border-pink-300 bg-pink-50/20 shadow-sm"
                : "border-gray-100 bg-white shadow-sm hover:shadow-md"
                }`}
        >
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <span className={`text-[12px] font-['Plus_Jakarta_Sans'] font-semibold px-3 py-1 rounded-full border ${badgeClass}`}>
                        {tech.badge}
                    </span>
                </div>

                <h3 className="text-[18px] font-['Plus_Jakarta_Sans'] font-bold text-[#0F172A] mb-2">{tech.name}</h3>

                <p className="text-[12px] text-[#64748B] font-normal font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
                    {tech.description}
                </p>

                <div className="flex items-center justify-between text-[11px] font-['Plus_Jakarta_Sans'] font-medium mb-6">

                    <span className="text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                        {tech.category}
                    </span>

                    <span className="text-[#64748B]">{tech.difficulty}</span>

                    <span className="flex items-center gap-1 font-semibold text-[#334155]">
                        <FaStar className="text-amber-400 text-xs" /> {tech.rating}
                    </span>
                </div>
            </div>

            <button
                onClick={handleCardAdd}
                disabled={isAdded || isLoading}
                className={`w-full py-3 rounded-xl font-medium text-[12px] font-['Plus_Jakarta_Sans'] flex items-center justify-center gap-2 transition-all ${isAdded
                        ? "bg-pink-100 text-pink-500 cursor-not-allowed font-semibold"
                        : isLoading
                            ? "bg-[#333] text-white cursor-wait"
                            : "bg-[#0A0F1D] text-white hover:bg-slate-800 active:scale-[0.98] cursor-pointer"
                    }`}
            >
                {isLoading ? (
                    <>
                        <FaSpinner className="animate-spin text-white" /> Adding...
                    </>
                ) : isAdded ? (
                    <>
                        <FaCheck className="text-pink-500" /> Added to Stack
                    </>
                ) : (
                    "Add to Stack"
                )}
            </button>
        </div>
    );
}

export default TechnologyCard;