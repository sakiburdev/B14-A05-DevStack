import React from "react";
import bannerImage from "../assets/banner-stack.png";

const bannerData = {
    title: {
        firstLine: "Build Your Ideal",
        secondLine: "Development Stack",
    },

    description: [
        "Explore frontend, backend, database, and tooling options,",
        "compare them side by side, and put together the stack that fits your",
        "next project.",
    ],

    buttons: [
        {
            text: "Explore Technologies",
            href: "#technologies",
            type: "primary",
        },
        {
            text: "Learn More",
            href: "#about",
            type: "secondary",
        },
    ],

    image: {
        src: bannerImage,
        alt: "Development Stack",
    },
};


const Banner = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex min-h-[500px] items-center justify-between px-6 lg:px-10">

                {/* Left Content */}
                <div className="w-1/2">

                    {/* Banner Title */}
                    <h1 className="font-inter text-[60px] font-extrabold leading-[1.05]">
                        <span className="block text-[#0F172A]">
                            {bannerData.title.firstLine}
                        </span>

                        <span className="block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            {bannerData.title.secondLine}
                        </span>
                    </h1>

                    {/* Banner Text */}
                    <p className="mt-6 max-w-[580px] font-Plus Jakarta Sans text-[18px] font-normal leading-[1.5] text-[#475569]">
                        {bannerData.description.map((line, index) => (
                            <span key={index} className="block">
                                {line}
                            </span>
                        ))}
                    </p>

                    {/* Banner Buttons */}
                    <div className="mt-12 flex items-center gap-3">
                        {bannerData.buttons.map((button) => (
                            <a
                                key={button.text}
                                href={button.href}
                                className={
                                    button.type === "primary"
                                        ? "rounded-[8px] bg-gradient-to-r from-[#F97316] to-[#EC4899] px-[16px] py-[12px] font-inter text-[14px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                                        : "rounded-[8px] border border-gray-200 bg-white px-[16px] py-[12px] font-inter text-[14px] font-normal text-[#374151] transition-colors duration-200 hover:bg-gray-50"
                                }
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex w-1/2 justify-end">
                    <img
                        src={bannerData.image.src}
                        alt={bannerData.image.alt}
                        className="w-[500px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;